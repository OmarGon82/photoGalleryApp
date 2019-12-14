import React from 'react';



/*
 * Renders a div to display the not found page. 
 * Displays the not found svg and an anchor tag to credit the svg author
 */

const NotFound = () => (

    <div className="main-content not-found" >
      <h2>Page Not Found</h2>
      <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="icon-size">
      <defs>
      <style>.cls-1 fill: #141f38;</style>
      </defs>
      <title>document-denied-outline</title>
      <path className="cls-1" d="M128,268.8h76.8a12.8,12.8,0,0,0,0-25.6H128a12.8,12.8,0,0,0,0,25.6Z"/>
      <path className="cls-1" d="M281.6,294.4H128a12.8,12.8,0,0,0,0,25.6H281.6a12.8,12.8,0,0,0,0-25.6Z"/>
      <path className="cls-1" d="M281.22,345.6H128a12.8,12.8,0,0,0,0,25.6H281.22a12.8,12.8,0,0,0,0-25.6Z"/>
      <path className="cls-1" d="M422.4,333.82V153.6L268.94,0H76.8a64,64,0,0,0-64,64V448a64,64,0,0,0,64,64H358.4a63.4,63.4,0,0,0,23.33-4.47A89.54,89.54,0,1,0,422.4,333.82ZM356.24,457.66A63.94,63.94,0,0,1,444.86,369ZM373.09,140.8H320a38.44,38.44,0,0,1-38.4-38.4V49.08ZM76.8,486.4A38.44,38.44,0,0,1,38.4,448V64A38.44,38.44,0,0,1,76.8,25.6H256v76.8a64,64,0,0,0,64,64h76.8V333.82A89.48,89.48,0,0,0,347,486.4Zm332.8,0a63.6,63.6,0,0,1-35.26-10.64L463,387.14A63.94,63.94,0,0,1,409.6,486.4Z"/>
      </svg>
      <a href='https://dryicons.com/free-icons/404-error'> Icon by Dryicons </a>
    </div>  
  
);

export default NotFound;

