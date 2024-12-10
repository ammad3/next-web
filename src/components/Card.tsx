interface ICardProps{
    heading: string;
    paragraph: string;
}

export default function Card(props: ICardProps) {
    const {heading, paragraph} = props;
  return (
    <div className="bg-blue-500 flex flex-col text-white items-center justify-center py-20 gap-6">
      <h1 className="text-4xl font-bold">{heading}</h1>
      <div className="bg-gray-900 w-80 h-80 border-4 border-red-500 rounded-[5px] ">
        <p className="w-auto h-64 leading-loose tracking-wide text-lg text-center mt-4">{paragraph}</p>
      </div>
    </div>
  );
}