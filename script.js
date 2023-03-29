function setup_projects()
{
    let projects_container = document.getElementById("flex-container");

    if (!projects_container) console.log("oei");

    let all_projects = document.getElementsByClassName("Project");

    for (let i = 0; i < all_projects.length; i++)
    {
        let project = all_projects.item(i);
        let anchor = document.createElement("a");
        let new_div = document.createElement("div");

        let project_title = project.children[0].cloneNode();
        project_title.innerHTML = project.children[0].innerHTML;

        let project_img = project.children[1].cloneNode();
        project_img.innerHTML = project.children[1].innerHTML;

        let project_desc = project.children[2].cloneNode();
        project_desc.innerHTML = project.children[2].innerHTML;

        project.setAttribute("id", project_title.innerHTML);
        anchor.setAttribute("href", "#" + project_title.innerHTML);
        
        const max_chars_desc = 150;

        if (project_desc.innerHTML.length > max_chars_desc)
        {
            project_desc.innerHTML = project_desc.innerHTML.slice(0, max_chars_desc - "...".length) + "...";
        }

        new_div.appendChild(project_title);
        new_div.appendChild(project_img);
        new_div.appendChild(project_desc);

        anchor.appendChild(new_div);
        projects_container.appendChild(anchor);
    }
}

window.onload = setup_projects;
