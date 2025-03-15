
import React, { useEffect, useState } from 'react';

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const handleScroll = () => {
      if (document.documentElement.scrollTop > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    const scrollToTop = () => {
      document.documentElement.scrollTop = 0;
    };
    
    // function topFunction() {
    //     document.documentElement.scrollTop = 0;
    // }

    // window.onscroll = function (){scrollFunction()}; 

    // function scrollFunction() {
    //     if (document.documentElement.scrollTop > 400) {
    //         document.getElementById("back-to-top").style.display = "block";
    //     } else {
    //         document.getElementById("back-to-top").style.display = "none";
    //     }
    // }

    return (
        <div>
            <footer className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="text-sm-end d-none d-sm-block">
                                Design & Develop by Visko E-serve
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <button  onClick={scrollToTop} className="btn btn-danger btn-icon" id="back-to-top">
                <i className="ri-arrow-up-line"></i>
            </button>
        </div>
    )
}

export default Footer