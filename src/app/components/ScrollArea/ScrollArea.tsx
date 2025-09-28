"use client";
import React, {useCallback, useEffect, useLayoutEffect, useRef, useState} from "react";

interface ScrollAreaProps {
  children: React.ReactNode;
  /** Height offset from top (e.g., navbar height) */
  topOffset?: number; // px
  /** Height offset from bottom (e.g., footer height) */
  bottomOffset?: number; // px
  /** Optional className for the scroll content wrapper */
  className?: string;
}

/**
 * A self-contained scroll area that hides the native scrollbar and renders
 * a custom overlay scrollbar thumb above the content. The thumb is aligned to the
 * right edge of the window and is draggable like the browser scrollbar.
 */
const ScrollArea: React.FC<ScrollAreaProps> = ({ children, topOffset = 100, bottomOffset = 75, className = "" }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [thumbHeight, setThumbHeight] = useState(0);
  const [thumbTop, setThumbTop] = useState(0);
  const [isScrollable, setIsScrollable] = useState(false);
  const isDraggingRef = useRef(false);
  const dragStartYRef = useRef(0);
  const dragStartScrollTopRef = useRef(0);

  const recompute = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    const { scrollHeight, clientHeight, scrollTop } = el;
    const canScroll = scrollHeight > clientHeight + 1; // tolerance
    setIsScrollable(canScroll);

    if (!canScroll) {
      setThumbHeight(0);
      setThumbTop(0);
      return;
    }

    const ratio = clientHeight / scrollHeight;
    const minPx = 28; // minimum visible size for usability
    const heightPx = Math.max(minPx, Math.round(clientHeight * ratio));
    setThumbHeight(heightPx);

    const maxScrollable = scrollHeight - clientHeight;
    const trackHeight = clientHeight - heightPx;
    const topPx = maxScrollable > 0 ? Math.round((scrollTop / maxScrollable) * trackHeight) : 0;
    setThumbTop(topPx);
  }, []);

  const onScroll = useCallback(() => {
    recompute();
  }, [recompute]);

  useLayoutEffect(() => {
    recompute();
  }, [recompute, children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleResize = () => recompute();
    let resizeObserver: ResizeObserver | undefined;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(handleResize);
      resizeObserver.observe(el);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      resizeObserver?.disconnect();
    };
  }, [recompute]);

  // compute container height based on viewport and offsets
  const heightStyle: React.CSSProperties = {
    height: `calc(100vh - ${topOffset}px - ${bottomOffset}px)`,
  };

  // Drag handling
  const startDrag = useCallback((clientY: number) => {
    const el = containerRef.current;
    if (!el) return;
    isDraggingRef.current = true;
    dragStartYRef.current = clientY;
    dragStartScrollTopRef.current = el.scrollTop;
    // Prevent text selection during drag
    document.body.style.userSelect = "none";
  }, []);

  const doDrag = useCallback((clientY: number) => {
    const el = containerRef.current;
    if (!el || !isDraggingRef.current) return;

    const { scrollHeight, clientHeight } = el;
    const maxScrollable = Math.max(0, scrollHeight - clientHeight);
    const trackHeight = Math.max(0, clientHeight - thumbHeight);
    if (trackHeight <= 0) return;

    const deltaY = clientY - dragStartYRef.current;
    const deltaScroll = (deltaY / trackHeight) * maxScrollable;
    const next = Math.min(maxScrollable, Math.max(0, dragStartScrollTopRef.current + deltaScroll));
    el.scrollTop = next;
  }, [thumbHeight]);

  const endDrag = useCallback(() => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    document.body.style.userSelect = "";
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      e.preventDefault();
      doDrag(e.clientY);
    };
    const handleMouseUp = () => endDrag();

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDraggingRef.current) return;
      if (e.touches.length > 0) {
        doDrag(e.touches[0].clientY);
      }
    };
    const handleTouchEnd = () => endDrag();

    window.addEventListener("mousemove", handleMouseMove, { passive: false });
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove as any);
      window.removeEventListener("mouseup", handleMouseUp as any);
      window.removeEventListener("touchmove", handleTouchMove as any);
      window.removeEventListener("touchend", handleTouchEnd as any);
    };
  }, [doDrag, endDrag]);

  return (
    <div className="relative" style={heightStyle}>
      {/* Scrollable content with hidden native scrollbar */}
      <div
        ref={containerRef}
        onScroll={onScroll}
        className={`custom-scroll overflow-y-auto h-full ${className}`}
      >
        {children}
      </div>

      {/* Custom scrollbar aligned to the window edge */}
      {isScrollable && (
        <div
          className="fixed right-0"
          style={{ top: topOffset, bottom: bottomOffset, width: 8, zIndex: 10 }}
          aria-hidden="true"
        >
          <div className="relative h-full w-full">
            <div
              role="scrollbar"
              aria-orientation="vertical"
              className="absolute left-0 right-0 rounded-full bg-white/40 hover:bg-white/60 transition-colors cursor-pointer"
              style={{ height: thumbHeight, top: thumbTop }}
              onMouseDown={(e) => startDrag(e.clientY)}
              onTouchStart={(e) => startDrag(e.touches[0].clientY)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ScrollArea;
