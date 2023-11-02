type Props = {
  title: string;
};
const SectionTitle: React.FC<Props> = ({ title }) => {
  return (
    <h2 className="my-4 md:my-8 lg:mt-10 mx-auto text-lg md:text-xl lg:text-2xl font-titles font-semibold">
      {title}
    </h2>
  );
};

export default SectionTitle;
