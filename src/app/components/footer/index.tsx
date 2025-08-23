"use client";



export default function Footer() {
    return (
        <>
        <style jsx>{`
        .footer-container {display: flex; justify-content: center; align-items: center;padding: 20px; background-color: #000; }
        .copyright {font-size: 18px; font-weight: 500; color: #f2f2f2;}

        `}</style>
        <footer className="footer-container">
            <h4 className="copyright">Copyright @ 2025. Insight Press - All Rights Reserved.</h4>
        </footer>
        </>
    );
}