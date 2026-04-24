function Hero() {
  return (
    <div className="hero-container">
      <div className="box left">Left Box</div>
      <div className="box right">Right Box</div>

      <style>{`
        .hero-container {
          display: flex;
          width: 100%;
          border-radius: 10px;
          overflow: hidden;
        }

        .box {
          padding: 20px;
          min-height: 200px;
        }

        .left {
          width: 40%;
          background: #d1d5db;
        }

        .right {
          width: 60%;
          background: #9ca3af;
        }

        /* 📱 TABLET */
        @media (max-width: 1024px) {
          .left, .right {
            width: 50%;
          }
        }

        /* 📱 MOBILE */
        @media (max-width: 768px) {
          .hero-container {
            flex-direction: column;
          }

          .left, .right {
            width: 100%;
          }
        }
      `}</style>
      
    </div>
  )
}

export default Hero