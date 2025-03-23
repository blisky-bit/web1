function toggleFullStory(buttonId, contentId) {
    var fullStoryDiv = document.getElementById(contentId);
    var toggleButton = document.getElementById(buttonId);
    var computedDisplay = window.getComputedStyle(fullStoryDiv).display;
    
    if (computedDisplay === 'none') {
        fullStoryDiv.style.display = 'block';
        toggleButton.textContent = 'Hide Full Story';
    } else {
        fullStoryDiv.style.display = 'none';
        toggleButton.textContent = 'Full Story';
    }
}
// 각 버튼에 대해 클릭 이벤트 추가
document.getElementById('full-story-btn').addEventListener('click', function() {
    toggleFullStory('full-story-btn', 'full-story-content');
});





