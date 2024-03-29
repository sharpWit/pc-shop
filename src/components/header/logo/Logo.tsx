// Cores //
import Link from "next/link";

const logoSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2989 1000"><defs><style>.cls-1{fill:#2563EB;}.cls-2{fill:#EF7501;}</style></defs><title>PC-Shop-Logo</title><g id="icon"><g id="icons"><rect class="cls-1" y="80" width="100" height="820"/><path class="cls-1" d="M900,0V1000h300V0Zm150,850a50,50,0,1,1,50-50A50,50,0,0,1,1050,850Z"/><rect class="cls-1" x="350" y="-270" width="100" height="800" transform="translate(530 -270) rotate(90)"/><rect class="cls-1" x="500" y="700" width="200" height="400" transform="translate(1500 300) rotate(90)"/><rect class="cls-1" x="350" y="450" width="100" height="800" transform="translate(1250 450) rotate(90)"/></g></g><g id="text"><g id="texts"><path class="cls-2" d="M1509.48,679.65a177.55,177.55,0,0,0-3.63-37.54,81.35,81.35,0,0,0-14-31q-10.41-14.25-28.74-28t-47.39-29a473.57,473.57,0,0,1-62.25-39.46,248,248,0,0,1-51.19-51.8q-22-29.87-34.67-68.79t-12.72-91q0-49.87,13.05-91.27t36.65-70.43a168.3,168.3,0,0,1,56.15-45.22Q1393.23,80,1432.2,80q40,0,72.66,18.36t55.81,51.25q23.11,32.89,35.67,78.11t12.55,98.94h-99.08a213.24,213.24,0,0,0-4.79-46.59q-4.79-21.37-14.69-36.73a71.8,71.8,0,0,0-24.77-23.84q-14.86-8.49-35-8.5-19.48,0-33.85,7.13a65.62,65.62,0,0,0-23.77,19.73,89.52,89.52,0,0,0-14.21,29.6,132.94,132.94,0,0,0-4.78,36.18q0,39.47,24.27,66.05t71.17,49.6q39.3,20.29,69.19,44.95a239.81,239.81,0,0,1,49.86,55.91q20,31.25,30.22,70.16t10.24,88.25q0,52.62-12.39,93.73t-35.17,69.33a153.53,153.53,0,0,1-55,43.31Q1474.15,900,1434.52,900a171.29,171.29,0,0,1-47.56-6.85,165.66,165.66,0,0,1-45.41-21.1,194.87,194.87,0,0,1-40.12-35.63Q1282.92,815,1269.23,786t-21.47-66q-7.76-37-7.76-82h99.4q0,36.18,6.94,61.4t19.32,40.83A72.66,72.66,0,0,0,1395.55,763q17.49,7.13,39,7.12,19.14,0,33.35-6.85a64.17,64.17,0,0,0,23.45-18.91,80.84,80.84,0,0,0,13.7-28.78A138.46,138.46,0,0,0,1509.48,679.65Z"/><path class="cls-2" d="M2067.27,889H1968.2V547H1775V889h-99.07V91H1775v323.4h193.2V91h99.07Z"/><path class="cls-2" d="M2548.78,508.09q0,91.55-14.86,164.16t-41.78,123.06q-26.92,50.43-64.56,77.56T2344.68,900q-45.24,0-82.89-27.13t-64.89-77.56q-27.26-50.43-42.44-123.06t-15.19-164.16V473q0-91,15-163.89t42.11-123.88q27.07-51,64.73-78.11T2344,80q45.24,0,82.9,27.13t64.72,78.11q27.08,51,42.11,123.88t15,163.89Zm-100.4-36.18q0-125.51-27.08-190.75T2344,215.94q-50.2,0-77.27,65.22t-27.09,190.75v36.18q0,62.49,7.1,110.45t20.48,80.57q13.38,32.63,32.86,49.33t44.58,16.72q50.21,0,77-65.77t26.75-191.3Z"/><path class="cls-2" d="M2719.85,607.85V889h-99.08V91h187.58q42.6,0,76.13,19.74t56.8,55.08q23.28,35.35,35.5,83.87T2989,355.16q0,58.11-12.22,104.69t-35.5,79.48q-23.28,32.89-56.8,50.7t-76.13,17.82Zm0-133.2h88.5q21.14,0,36.5-8.77a70.38,70.38,0,0,0,25.09-24.39q9.75-15.62,14.37-37.55a231.18,231.18,0,0,0,4.62-47.68,260.39,260.39,0,0,0-4.62-49.61q-4.64-23.83-14.37-42.2t-25.09-29.33q-15.36-11-36.5-11h-88.5Z"/></g></g></svg>
`;

const Logo = () => {
  return (
    <Link href="/" className="block w-full h-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="120"
        height="30"
        dangerouslySetInnerHTML={{ __html: logoSvg }}
        className="cursor-pointer"
        style={{
          maxWidth: "100%",
          objectFit: "contain",
          width: "auto",
          height: "auto",
        }}
      />
    </Link>
  );
};

export default Logo;
