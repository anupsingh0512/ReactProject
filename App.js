        
        import React from 'react';
        import ReactDOM from 'react-dom/client';

        const Header = () => {
           return (
            <div className="header">
            <div className="logo-container"> 
                <img className="logo" 
                src="https://img.freepik.com/premium-psd/drawing-peacock-with-feathered-tail_939434-10166.jpg?w=740">
                </img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home </li>
                    <li>About Us </li>
                    <li>Contact Us </li>
                    <li>Cart </li>
                </ul>
            </div>
            </div>           
            );
        };

        

        const RestaurantCard =() => {
        return(
            <div className="res-card" style={{backgroundColor: "f0f0f0" }}>
            <img className="res-logo"
            alt="res-logo"
            src="https://img.freepik.com/free-photo/delicious-fresh-pizza-black-background_125540-5050.jpg?ga=GA1.1.592957340.1729247089&semt=ais_hybrid" />   
            <h3> Meghna Foods</h3>
            <h4> Pizza ,Italian ,Asian </h4>
            <h4>4.4 star </h4>
            <h4>35 minutes </h4>
            </div>
        );
        };

        const Body = () => {
        return (
            <div className="body">
             <div className="Search">
              Search
             </div>
             <div className="Restaurant-Container">
                <RestaurantCard />
             </div>
            </div>
        );
        };

        const AppLayout = () => {
            return (
              <div className="app">
              <Header />
              <Body />
              </div>
            );
        };
        
       const root = ReactDOM.createRoot(document.getElementById("root"));
       root.render(<AppLayout />);

