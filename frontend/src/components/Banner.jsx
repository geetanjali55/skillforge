import React from 'react'
import Navbar from './Navbar'
import { bannerStyles, customStyles } from '../assets/dummyStyles'
import { features, floatingIcons } from '../assets/dummyBanner'
import { CircleCheckBig, Sparkles, X } from 'lucide-react'
import bannerImg from '../assets/bannerimage.jpg'
import video from '../assets/bannerVideo.mp4'

const Banner = () => {
  const [showVideo, setShowVideo] = React.useState(false)

  return (
    <div className={bannerStyles.container}>
      
      <Navbar />

      {/* Floating Icons */}
      <div className={bannerStyles.floatingIconsWrapper}>
        {floatingIcons.map((icon, i) => (
          <img
            key={i}
            src={icon.src}
            alt={icon.alt || ""}
            className={`${bannerStyles.floatingIcon} ${icon.pos}`}
            style={{
              animationDelay: `${i * 0.35}s`,
              willChange: "transform, opacity",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className={bannerStyles.mainContent}>
        <div className={bannerStyles.grid}>
          <div className={bannerStyles.leftContent}>
            
            <span className={bannerStyles.badge}>
              <Sparkles className={bannerStyles.badgeIcon} />
              New Features Available
            </span>

            <p className={bannerStyles.description}>
              Create beautiful responsive web applications with our powerful tools and components. Start building your next project today.
            </p>

            {/* Features */}
            <div className={bannerStyles.features}>
              {features.map((feature, i) => (
                <div key={i} className={bannerStyles.featureItem}>
                  <div className={bannerStyles.featureIconContainer}>
                    <span className={`${bannerStyles.featureIcon} text-${feature.color}-500`}>
                      <CircleCheckBig size={16} />
                    </span>
                  </div>
                  <span className={bannerStyles.featureText}>
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className={bannerStyles.buttonsContainer}>
              <a
                href="/courses"
                className={bannerStyles.buttonGetStarted}
              >
                Get Started
              </a>

              <button onClick={() => setShowVideo(true)}>
                View Demo
              </button>
            </div>

          </div>

          {/* Right Content */}
          <div className={bannerStyles.rightContent}>
            <img
              src={bannerImg}
              alt="banner"
              className={bannerStyles.image}
            />
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className={bannerStyles.videoModal.overlay}>
          <div className={bannerStyles.videoModal.container}>

            {/* KEEPING IFRAME as per tutorial */}
            <iframe
              src={video}
              className={bannerStyles.videoModal.iframe}
              title="Demo Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />

            <button
              onClick={() => setShowVideo(false)}
              className={bannerStyles.videoModal.closeButton}
            >
              <X className={bannerStyles.videoModal.closeIcon} />
            </button>

          </div>
        </div>
      )}
      <style jsx>
        {customStyles}

      </style>
    </div>
  )
}

export default Banner