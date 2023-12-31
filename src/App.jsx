import { useState } from "react";

import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSideBar from "./components/ProjectsSideBar";

function App() {
  const [projectsState, setProjectsState] = useState({
    SelectedProjectId : undefined,
    projects: []
  });
  function handleStartAddProject() {
    setProjectsState(prevState => {
      return{
        ...prevState,
        SelectedProjectId: null,
      }
    });

  }

  function handleAddProject(projectData){
    setProjectsState(prevState => {
      const newProject = {
        ...projectData,
        id: Math.random()
      };
      return {
        ...prevState,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  console.log(projectsState)

  let content;
  if (projectsState.SelectedProjectId === null){
    content = <NewProject onAdd={handleAddProject}/>
  } else if (projectsState.SelectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSideBar onStartAddProject={handleStartAddProject}/>
      {content}
      </main>
  );
}

export default App;
