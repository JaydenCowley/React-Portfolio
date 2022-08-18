import React from "react";
import NavTabs from "../NavTabs";
import PortCard from "../PortCard";
import PortfolioData from "../PortfolioData";
export default function Home () {
    return(
        <div className="grid">
            
            {PortfolioData.map((e) => {
                return (
                    <PortCard
                    href={e.href}
                    title={e.title}
                    img={e.img} />
                )
            })}</div>
    )
}
