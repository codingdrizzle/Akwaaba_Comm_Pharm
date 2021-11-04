function Map() {
  const mapstyles = {
    width: "100%",
    height: "50vh",
    border: "0",
    allowfullscreen: "",
    loading: "lazy",
  };
  return (
    <>
      <iframe
        style={mapstyles}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.558326089741!2d-0.36851368523103134!3d6.189806695518902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf3994589e52bd%3A0xbacfb9fa50638314!2sAkwaaba%20Community%20Pharmacy!5e0!3m2!1sen!2sgh!4v1635762456083!5m2!1sen!2sgh"
        title="map"
      ></iframe>
    </>
  );
}

export default Map;
