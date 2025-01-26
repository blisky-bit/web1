function toggleFullStory(buttonId, contentId) {
    var fullStoryDiv = document.getElementById(contentId);
    var toggleButton = document.getElementById(buttonId);
    
    // 'display' 속성으로 상태 확인
    if (fullStoryDiv.style.display === 'none' || fullStoryDiv.style.display === '') {
        fullStoryDiv.style.display = 'block'; // 내용을 보이게 설정
        toggleButton.textContent = 'Hide Full Story'; // 버튼 텍스트 변경
    } else {
        fullStoryDiv.style.display = 'none'; // 내용을 숨김
        toggleButton.textContent = 'Full Story'; // 버튼 텍스트 변경
    }
}

// 각 버튼에 대해 클릭 이벤트 추가
document.getElementById('full-story-btn-1').addEventListener('click', function() {
    toggleFullStory('full-story-btn-1', 'full-story-content-1');
});

document.getElementById('full-story-btn-2').addEventListener('click', function() {
    toggleFullStory('full-story-btn-2', 'full-story-content-2');
});

document.getElementById('full-story-btn-3').addEventListener('click', function() {
    toggleFullStory('full-story-btn-3', 'full-story-content-3');
});


