import { useState } from "react";

import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSideBar from "./components/ProjectsSideBar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    SelectedProjectId : undefined,
    projects: []
  });

  function handleSelectProject(id){
    setProjectsState(prevState => {
      return{
        ...prevState,
        SelectedProjectId: id,
      }
    });
  }

  function handleStartAddProject() {
    setProjectsState(prevState => {
      return{
        ...prevState,
        SelectedProjectId: null,
      }
    });

  }

  function handleCancelAddProject(){
    setProjectsState(prevState => {
      return{
        ...prevState,
        SelectedProjectId: undefined,
      }
    });

  }

  function handleAddProject(projectData){
    setProjectsState(prevState => {
      const projectId = Math.random()
      const newProject = {
        ...projectData,
        id: projectId
      };
      return {
        ...prevState,
        SelectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.SelectedProjectId)

  let content = <SelectedProject project={selectedProject}/>;
  if (projectsState.SelectedProjectId === null){
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>
  } else if (projectsState.SelectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSideBar 
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
      />
      {content}
      </main>
  );
}

export default App;
