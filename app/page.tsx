import Image from "next/image";

export default function Home() {
  return (
    <div className="development">
    <div>
      <Image className="pc" src="/images/development_img.png" alt="현재 홈페이지 개편을 위한 작업중입니다." width={2560} height={1440}/>
      <Image className="mo" src="/images/development_mo.png" alt="현재 홈페이지 개편을 위한 작업중입니다." width={500} height={526}/>
    </div>
      {/* <article>
        <div>

        </div>
      </article> */}
    </div>
  );
}
