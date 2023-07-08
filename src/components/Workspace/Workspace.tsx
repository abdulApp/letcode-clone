import React, { useState } from "react";
import Split from "react-split";
import ProblemDescription from "./ProblemDescription/ProblemDescription";
import Playground from "./Playground/Playground";
import { Problem } from "@/utils/types/problem";
import useWindowSize from "@/hooks/useWindowSize";
import Confetti from "react-confetti";

type WorkspaceProps = {
  problem: Problem;
};

const Workspace: React.FC<WorkspaceProps> = ({ problem }) => {
    const { width, height } = useWindowSize();
    const [success, setSuccess] = useState(false);
    const [solved, setSolved] = useState(false);

    return (
      <Split className="split" minSize={0}>
        <ProblemDescription problem={problem} _solved={false} />
        <Playground
        problem={problem}
        // setSuccess={setSuccess}
        // setSolved={setSolved}
        />
        <div className='bg-dark-fill-2'>
				{success && <Confetti gravity={0.3} tweenDuration={4000} width={width - 1} height={height - 1} />}
			</div> 
      </Split>
    );
  };
export default Workspace;
