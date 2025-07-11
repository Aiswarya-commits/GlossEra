const isValidImageUrl = (url) => {
    if (!url || typeof url !== "string") return false;
    const lower = url.toLowerCase();
    return (
      (lower.includes(".jpg") || lower.includes(".png") || lower.includes(".jpeg") || lower.includes(".webp")) &&
      (lower.startsWith("http://") || lower.startsWith("https://"))
    );
  };
  
  export default isValidImageUrl;
  