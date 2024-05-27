import Image from "next/image";

const CustomImage = ({
  image,
  alt,
  unoptimized,
  priority,
  width,
  height,
  fill,
  className,
  onClick,
}) => {
  return (
    <Image
      width={width && width}
      height={height && height}
      src={image}
      alt={alt ? alt : "image"}
      hidden={false}
      unoptimized={unoptimized ? unoptimized : false}
      priority={priority ? priority : false}
      suppressHydrationWarning={true}
      suppressContentEditableWarning={true}
      loading="eager"
      blurDataURL={image}
      quality={100}
      fill={fill}
      className={className}
      onClick={onClick && onClick}
    />
  );
};

export default CustomImage;
