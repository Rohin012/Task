
        
        let imageCount = 0;
        let imagesData = [];

        function addImage() {
            const fileInput = document.getElementById("imageUpload");
            const gallery = document.getElementById("gallery");
            const file = fileInput.files[0];

            if (file) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    const imageElement = createImageElement(e.target.result, imageCount);
                    imagesData.push({ likes: 0, dislikes: 0 });
                    gallery.appendChild(imageElement);
                    imageCount++;
                };
                reader.readAsDataURL(file);
            }
        }

        function createImageElement(src, id) {
            const div = document.createElement("div");
            div.classList.add("image");

            const img = document.createElement("img");
            img.src = src;
            img.alt = `Image ${id}`;

            const likeDislikeDiv = document.createElement("div");
            likeDislikeDiv.classList.add("like-dislike");

            const likeButton = document.createElement("button");
            likeButton.textContent = "Like";
            likeButton.onclick = () => likeImage(id);

            const dislikeButton = document.createElement("button");
            dislikeButton.textContent = "Dislike";
            dislikeButton.onclick = () => dislikeImage(id);

            likeDislikeDiv.appendChild(likeButton);
            likeDislikeDiv.appendChild(dislikeButton);

            div.appendChild(img);
            div.appendChild(likeDislikeDiv);

            return div;
        }

        function likeImage(id) {
            imagesData[id].likes++;
            updateLikeDislikeCounts(id);
        }

        function dislikeImage(id) {
            imagesData[id].dislikes++;
            updateLikeDislikeCounts(id);
        }

        function updateLikeDislikeCounts(id) {
            const imageElement = document.getElementsByClassName("image")[id];
            const likeCount = imagesData[id].likes;
            const dislikeCount = imagesData[id].dislikes;
            const likeDislikeDiv = imageElement.querySelector(".like-dislike");
            likeDislikeDiv.innerHTML = `
                <button>Like (${likeCount})</button>
                <button>Dislike (${dislikeCount})</button>
            `;
        }
    