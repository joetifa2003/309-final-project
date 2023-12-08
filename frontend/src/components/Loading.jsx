import { Bars } from "react-loader-spinner";

export const Loading = () => (
  <div className="fixed right-0 top-0 flex h-full w-full items-center justify-center bg-white">
    <Bars
      height="80"
      width="80"
      color="#EEC39E"
      ariaLabel="bars-loading"
      visible={true}
    />
  </div>
);
