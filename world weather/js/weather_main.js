addEventListener('DOMContentLoaded', () =>{
const cities = [
    { id: 'city1', image: '/images/seoul.jpg' },  // 절대 경로
    { id: 'city2', image: '/images/tokyo.jpg' },
    { id: 'city3', image: '/images/newyorkcity.jpg' },
    { id: 'city4', image: '/images/london.jpg' },
    { id: 'city5', image: '/images/berlin.jpg' },
    { id: 'city6', image: '/images/hongkong1.jpg' },
    { id: 'city7', image: '/images/chiangmai.jpg' },
    { id: 'city8', image: '/images/barcelona.jpg' },
    { id: 'city9', image: '/images/copenhagen.jpg' },
    { id: 'city10', image: '/images/roma.jpg' },
    { id: 'city11', image: '/images/athens.jpg' },
    { id: 'city12', image: '/images/dubai.jpg' },
    { id: 'city13', image: '/images/sydney.jpg' },
    { id: 'city14', image: '/images/danang.jpg' },
    { id: 'city15', image: '/images/naples.jpg' },
    { id: 'city16', image: '/images/kyoto.jpg' },
    { id: 'city17', image: '/images/paris.jpg' },
    { id: 'city18', image: '/images/sanghai.jpg' },
    { id: 'city19', image: '/images/moscow.jpg' },
    { id: 'city20', image: '/images/madrid.jpg' },
    { id: 'city21', image: '/images/jakarta.jpg' },
    { id: 'city22', image: '/images/firence.jpg' },
    { id: 'city23', image: '/images/beijing.jpg' },
    { id: 'city24', image: '/images/milano.jpg' },
    { id: 'city25', image: '/images/losangeles.jpg' },
    { id: 'city26', image: '/images/california.jpg' },
    { id: 'city27', image: '/images/danang.jpg' },
    { id: 'city28', image: '/images/danang.jpg' },
    { id: 'city29', image: '/images/manila.jpg' },
    { id: 'city30', image: '/images/busan.jpg' },
    
]

cities.forEach(city => {
        const section = document.getElementById(city.id); // city.id가 아닌 HTML에 있는 id를 그대로 사용
        if (section) {
            section.style.backgroundImage = `url(${city.image})`;
        }
    });


      window.addEventListener('scroll', function () {
        var footer = document.querySelector('.fixed-footer');
        var scrollPosition = window.scrollY || document.documentElement.scrollTop;

        if (scrollPosition > 2000) { // 스크롤이 300px 이상 내려가면
          footer.classList.add('show');
        } else {
          footer.classList.remove('show');
        }
      });
    })