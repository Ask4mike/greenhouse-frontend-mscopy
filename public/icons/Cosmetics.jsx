/* eslint-disable react/prop-types */
export default function Cosmetics({
  width = "14",
  height = "22",
  fill = "none",
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 22"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 5H9M4 5V7.5H9V5M4 5V3.5C4 2 5.5 1 7 1H12.5C12.5 1 9 2 9 4V5M1.5 8.5C1.5 8.23478 1.60536 7.98043 1.79289 7.79289C1.98043 7.60536 2.23478 7.5 2.5 7.5H10.5C10.7652 7.5 11.0196 7.60536 11.2071 7.79289C11.3946 7.98043 11.5 8.23478 11.5 8.5V18C11.5 18 11.5 21 8.5 21H4.5C1.5 21 1.5 18 1.5 18V8.5Z"
        stroke="#002c17"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
