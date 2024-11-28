import { ResultsProps } from "@/app/data.type";
import { Card } from "./Card";

type Props = {
  results: ResultsProps[];
};

export const Results = ({ results }: Props) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {results.map((result) => (
        <div key={result.id}>
          <Card result={result} />
        </div>
      ))}
    </div>
  );
};
