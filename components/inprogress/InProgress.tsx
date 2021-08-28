import Image from "next/image";
import crane from "../../public/crane.png";

function InProgress() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image src={crane} width={150} height={150} />
      <p className="text-xl mt-5">
        Welcome to my Site! It's currently under construction but should be up
        soon!
      </p>
    </div>
  );
}

export default InProgress;
