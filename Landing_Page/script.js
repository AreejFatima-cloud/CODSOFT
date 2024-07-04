 function toggleReadMore() {
            var moreText = document.querySelector('.more-text');
            var readMoreBtn = document.querySelector('.read-more');
            
            if (moreText.style.display === "none") {
                moreText.style.display = "inline";
                readMoreBtn.textContent = "Read Less";
            } else {
                moreText.style.display = "none";
                readMoreBtn.textContent = "Read More";
            }
        }
