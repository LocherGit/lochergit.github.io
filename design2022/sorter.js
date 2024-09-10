const sortedProjects = projects.sort((a, b) => (a.title > b.title ? 1 : b.title > a.title ? -1 : 0));
searchOnInput();

function searchOnInput() {
    const filter = document.getElementById("search").value.toLowerCase();
    const list = document.getElementById("projects");

    while (list.firstChild) { list.removeChild(list.firstChild); }

    // filter
    const filteredProjects = sortedProjects.filter((project) => {
        let key;
        for (key in project) {
            if (project.hasOwnProperty(key)) {
                const prop = project[key];
                if (typeof prop === "string" && prop.toLowerCase().includes(filter)) { return true; }
            }
        }
        return false;
    });

    // create list
    filteredProjects.forEach(({ title, image, description, tags, linkname_one, link_one, linkname_two, link_two }) => {
        const hr = document.createElement("hr");
        list.appendChild(hr);

        const card = document.createElement("div");
        card.className = "card_frame";

        const body = document.createElement("div");
        body.className = "card_body";
        card.appendChild(body);

        const flexContainer = document.createElement("div");
        flexContainer.className = "flex_container";
        body.appendChild(flexContainer);

        const flexInfo = document.createElement("div");
        flexInfo.className = "flex_child";
        flexContainer.appendChild(flexInfo);

        // title
        const cardTitle = document.createElement("h3");
        const cardTitleNode = document.createTextNode(title);
        cardTitle.className = "card_title";
        cardTitle.appendChild(cardTitleNode);
        flexInfo.appendChild(cardTitle);

        // description
        if (description) {
            const cardDescription = document.createElement("p");
            const cardDescriptionNode = document.createTextNode(description);
            cardDescription.className = "card_description";
            cardDescription.appendChild(cardDescriptionNode);
            flexInfo.appendChild(cardDescription);
        }

        // tags
        if (tags) {
            const tagNode = document.createElement("p");
            const taglist = document.createTextNode("Tags: " + tags);
            tagNode.className = "card_tags";
            tagNode.appendChild(taglist);
            flexInfo.appendChild(tagNode);
        }

        // toolbar
        const toolbar = document.createElement("div");
        toolbar.className = "button_toolbar";
        flexInfo.appendChild(toolbar);

        // First Link button
        if (linkname_one) {
            const repoButton = document.createElement("a");
            const buttonNode = document.createTextNode(linkname_one);
            repoButton.className = "button button_primary";
            repoButton.href = link_one;
            repoButton.appendChild(buttonNode);
            toolbar.appendChild(repoButton);
        }

        // Second Link button
        if (linkname_two) {
            const secondlinkButton = document.createElement("a");
            const secondbuttonNode = document.createTextNode(linkname_two);
            secondlinkButton.className = "button button_secondary";
            secondlinkButton.href = link_two;
            secondlinkButton.appendChild(secondbuttonNode);
            toolbar.appendChild(secondlinkButton);
        }

        // Image
        if (image) {
            const flexImage = document.createElement("div");
            flexImage.className = "flex_child";
            flexContainer.appendChild(flexImage);

            const imageNode = document.createElement("img");
            imageNode.className = "flex_image";
            imageNode.setAttribute('src', image);
            imageNode.setAttribute('alt', 'Image of ' + title);

            const imageLinkNode = document.createElement("a");
            imageLinkNode.href = image;
            imageLinkNode.target="_blank"
            imageLinkNode.appendChild(imageNode);
            flexImage.appendChild(imageLinkNode);
        }

        list.appendChild(card);
    });
}
        