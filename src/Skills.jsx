import { useState } from "react";

function Skills() {

  const [activeSkill, setActiveSkill] = useState(null);

  const skills = [
    {
      name: "HTML",
      description: " sematic and non-sematic tags, forms, tables."
    },
    {
      name: "CSS",
      description: "Color, Grid, Selector, border,margin and padding."
    },
    {
      name: "JavaScript",
      description: "ES6, DOM manipulation, promise."
    },
    {
      name: "React",
      description: "Hooks, Components, State management, Routing."
    },
    {
      name: "Java",
      description: "OOP, Collections, Methods."
    },
    {
      name: "Spring Boot",
      description: "REST APIs, Maven,URL param,CRUD operation, JPA."
    },
    {
      name: "MySQL",
      description: "DDl,DML,Keys,Joins, Constraints, Normalization."
    },
    
  {
    "name": "Bootstrap",
    "description": "Responsive layout, Grid system, Components, Utilities."
  },
  {
    "name": "Tailwind CSS",
    "description": "Utility-first styling, Responsive design, Flexbox, Grid."
  },
  {
    "name": "Spring MVC",
    "description": "MVC architecture, Controllers, Request mapping."
  },
  {
    "name": "Hibernate",
    "description": "ORM framework, Entity mapping, HQL, Persistence management."
  },
  {
    "name": "JWT Authentication",
    "description": "Token-based authentication, Authorization, Security, User sessions."
  },
  {
    "name": ".NET",
    "description": "Web applications, APIs, MVC architecture, Dependency Injection."
  },
  {
    "name": "C#",
    "description": "OOP, LINQ, Collections, Exception handling."
  },
  {
    "name": "Data Structures & Algorithms",
    "description": "Arrays, Linked Lists, Trees, Graphs, Sorting and Searching."
  },
  {
    "name": "System Design Fundamentals",
    "description": "Scalability, Database design, Caching, Client-server architecture and load balancing."
  },
  {
    "name": "Git",
    "description": "Version control, Branching, Merging, Repository management."
  },
  {
    "name": "Postman",
    "description": "API testing, Request collections, Environment variables, Automation."
  },

    {
      name: "GitHub",
      description: "Version control, Branching, add, commit,merge."
    }
  ];

  const handleClick = (skillName) => {
    if (activeSkill === skillName) {
      setActiveSkill(null); // hide if same clicked again
    } else {
      setActiveSkill(skillName); // show clicked skill
    }
  };

  return (
    <div className="bg-dark text-white py-5">
      <div className="container text-center">
        <h1 className="mb-4">Skills</h1>

        <div className="row justify-content-center g-4">
          {skills.map((skill) => (
            <div key={skill.name} className="col-6 col-md-4 col-lg-3">
              <div
                className="border border-info rounded p-3"
                onClick={() => handleClick(skill.name)}
              >
                <h5>{skill.name}</h5>

                {activeSkill === skill.name && (
                  <p className="mt-2 small text-info">
                    {skill.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Skills;
