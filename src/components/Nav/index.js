import React from "react";

function Nav() {
    const categories = [
        { name: "Chasing Clarity", description: "Portraits of people in my life" },
        { name: "Black Lines", description: "Delicious delicacies" },
      ];
      function categorySelected(name) {
        console.log(`${name}clicked`)
      }
    return (
        <header>
            <h2>
                <a href="/">
                <span role="img" aria-label="camera"> 📸</span> Sam.McMahon
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                <li className="mx-2">
                    <a href="#about">
                    Bio
                    </a>
                </li>
                <li>
                    <span>Contact</span>
                </li>
                {categories.map((category) =>(
                    <li
                    className="mx-1"
                    key={category.name}
                    >
                        <span onClick={()=>categorySelected(category.name)} >
                            {category.name}
                        </span>
                    </li>
                 ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;