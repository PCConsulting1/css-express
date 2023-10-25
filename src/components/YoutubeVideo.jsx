const YoutubeEmbed = () => (
  <div className="video-responsive">
    <iframe
      className="youtube-video"
      width="853"
      height="480"
      sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
      src={`https://www.youtube.com/embed/Wv9oYaVOZyc?autoplay=0`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Testimonials"
    />
  </div>
)

export default YoutubeEmbed
