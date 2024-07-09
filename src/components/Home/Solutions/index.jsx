import SolutionSection from "./components/SolutionSection";
import { solutionsData } from "./constants";

export default function Solutions() {
  const renderSolutions = (solutions = []) => {
    return solutions.map((solution, index) => (
      <SolutionSection
        key={solution.title}
        reverse={!index % 2 === 0}
        {...solution}
      />
    ));
  };

  return (
    <section className="flex w-full w-full flex justify-center items-center py-16">
      <div
        id="solutions"
        className="w-content flex flex-col items-center relative md:px-0 px-8"
      >
        <h1 className="mb-20 font-medium md:text-5xl text-4xl text-center text-transparent py-2 bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-700 sm:leading-normal leading-normal">
          Soluções que fazem a diferença
        </h1>

        {renderSolutions(solutionsData)}
      </div>
    </section>
  );
}
