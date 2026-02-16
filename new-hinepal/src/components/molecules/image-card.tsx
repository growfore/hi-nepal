import Link from "next/link";
import Image from "next/image";
import HLinkComp from "../atoms/link-component";

export function ImageCard() {
  return (
    <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center justify-between rounded-md p-2  md:p-8">
      <div className="md:w-[50%]">
        <Image
          className="rounded-md"
          src={"/assets/paragliding.webp"}
          alt="paragliding"
          height={500}
          width={500}
          priority
        />
      </div>
      <div className="md:max-w-[50%]">
        <h2 className="font-bold text-xl">Paragliding</h2>
        <div className="text-left">
          Paragliding in Pokhara is one of the popular activities that visitors
          as well as locals love to experience. Either you are here for a{" "}
          <HLinkComp href="/pokhara-valley-tour" text="Pokhara Valley Tour" />
          or returning from the
          <HLinkComp href="/annapurna-base-camp-trek" text="ABC Trek" />
          or any other Annapurna Region Trek, paragliding in Pokhara must be on
          your to-do list. Pokhara Sarangkot paragliding is a perfect adventure
          blended with nature, offering epic views of mountains, hills, Fewa
          Lake, and Pokhara Valley.
        </div>
        <p className="font-bold  mt-2">Types of paragliding:</p>
        <ul>
          <li>
            <strong>Tandem Paragliding:</strong> For tourists and newcomers, you
            are accompanied by a competent pilot. There is nothing to do but
            sit, relax, and enjoy the view of the mountains, lake, and sky.
          </li>
          <li>
            <strong>Solo Paragliding:</strong> For licensed pilots or riders who
            meet the requirements. You are flying by yourself with total
            independence and control. You need a license, training, and a lot of
            confidence in your skills.
          </li>
        </ul>
      </div>
    </div>
  );
}
