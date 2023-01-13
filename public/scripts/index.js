window.onload = function(){
    getComment();
    sendComment();
}

function sendComment() {
    const commentButton = document.getElementById('comment-button');    
    commentButton.addEventListener("click", (e) => {
        e.preventDefault;
        const text = document.getElementById('text-input').value;
        const img = document.getElementById('file-input').files[0];
        let url = '/api/comments';
        const formData = new FormData();
        formData.append('img',img)
        formData.append('text',text)
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            if (data['ok'] == true) {
                const body = document.body;
                const submitComment = document.createElement('div');
                submitComment.classList.add('container');
                const content = document.createElement('div');
                content.textContent = text;
                const img = document.createElement('img');
                img.classList.add('cmt-img');
                img.setAttribute('src', data['data']);
                img.setAttribute('alt', '上傳的圖片無法顯示');
                body.insertBefore(submitComment, body.children[1]);
                submitComment.appendChild(content);
                submitComment.appendChild(img);
            } 
        })
    })
}

function getComment() {
    const body = document.body;
    let url = '/api/comments';
    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        data.slice().reverse().forEach(element => {
            const commentContainer = document.createElement('div');
            commentContainer.classList.add('container');
            const content = document.createElement('div');
            content.textContent = element['content'];
            const img = document.createElement('img');
            img.classList.add('cmt-img');
            img.setAttribute('src', element['img_url']);
            img.setAttribute('alt', '上傳的圖片無法顯示');
            body.appendChild(commentContainer);
            commentContainer.appendChild(content);
            commentContainer.appendChild(img);
        });
    })
}


