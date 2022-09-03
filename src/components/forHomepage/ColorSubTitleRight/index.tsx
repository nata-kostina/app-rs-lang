import styles from "./styles.module.scss";
import ArrowLeft from "../ArrowLeft";
import ArrowRight from "../ArrowRight";

const SubTitle = ({
  width,
  height,
  color,
  children,
}: {
  width: string;
  height: string;
  color: string;
  children: string;
}) => {
  // const _style = { width: `${width}px`, height: `${height}px` };
  return (
    <div className={styles["flex-center"]}>
    
      <h3 className={styles.subtitle} style={{ color: `${color}` }}>
        {children}
      </h3>

      <svg
        width={`${width}px`}
        height={`${height}px`}
        clip-rule="evenodd"
        fill-rule="evenodd"
        image-rendering="optimizeQuality"
        shape-rendering="geometricPrecision"
        text-rendering="geometricPrecision"
        version="1.0"
        viewBox="0 0 1800.4 667.95"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
           fill={`${color}`}
          d="m1800.4 428.84c-29.36 3.66-58.74 7.5-88.15 10.77-46.41 5.16-93.13 8.3-139.72 11.45-80.38 5.43-159.14 15.07-239.07 22.09l-7.38-23.24c47.97-14.36 95.37-26.63 145.16-34.06 30.52-4.54 61.34-7.73 91.99-11.4 47.7-5.72 95.14-12.41 142.57-20.07l31.66-3.84c-22.34-30.69-47.59-54.96-73.69-77.38-34.28-35.78-77.55-60.93-120.84-84.8-149.32-78.43-306.18-110.09-463.74-35.89-94.92 44.7-174.55 119-247.42 193.06-95.24 96.81-210.75 234.12-342.59 277.34-30.84 10.11-62.54 15.27-95.01 15.07-146.33-0.87-289.65-61.97-359.27-196.71-18.3-35.4-29.94-73.61-34.91-113.02h22.3c73.41 283.2 400.38 369.28 613.81 170.65l0.38-0.35 180.39-195.26c184.39-200.01 435.93-287.29 693.23-171.39 40.66 18.32 81.22 37.27 118.08 62.58 42.42 29.12 74.03 50.74 107.04 89.9l-4.55-42.4c-1.49-66.46-33.09-197.77-62.7-271.93l36.62 4.61c20.72 28.69 43.97 130.56 52.01 160.24 20.47 75.58 40.32 182.99 43.78 263.99z"
        />
      </svg>
    </div>
  );
};
export default SubTitle;
