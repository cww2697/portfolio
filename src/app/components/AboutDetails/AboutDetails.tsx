import React from "react";

interface AboutDetailsProps {
    detailsText: string;
}

const AboutDetails: React.FC<AboutDetailsProps>  = (
    {detailsText}
) => {
    return (
        <>
            <p>{detailsText}</p>
            <br/>
        </>
    );
}

export default AboutDetails;