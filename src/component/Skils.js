import "./Skils.css";
import kirby from '../images/kirby.png';
function Skils(){

    return (
<div class="project">
	<div class="skills">
		<div class="inner">
			<h2><span>활용능력 Skills</span></h2>
			
			<ul class="skill_list">
				<li>
					HTML
					<ul>
						<li><span>HTML 5, XHTML 마크업</span></li>
						<li><span>웹 표준 / 접근성 준수</span></li>
					</ul>
				</li>
				<li>
					CSS
					<ul>
						<li><span>CSS 3</span></li>
						<li><span>반응형 웹 (Media Query)</span></li>
					</ul>
				</li>
				<li>
					JavaScript
					<ul>
						<li><span>바닐라 자바스크립트</span></li>
						<li><span>ES 6 활용</span></li>
						<li><span>React 활용</span></li>
					</ul>
				</li>
			</ul>
		</div>
	</div>

	<div class="portfolio">
					<li>
						<div class="img_area"><img src={kirby} alt=""/></div>
						<div class="portfolio_cont">
							<h3>
								<span class="num_portfolio">01</span>
								TODO LIST
							</h3>

							<ul class="point">
								<li>
									<span>React JS</span>
								</li>
							</ul>
							<div class="btn_area">
								<a href="https://suyeon0103.github.io/todo_list/" target="_blank" class="btn_goto">GoTo</a>
							</div>
							<table class="file_link">
								<thead>
									<tr>
										<th id="col1">Category</th>
										<th id="col2">Source (click!)</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td headers="col1">
											<span class="category html">React</span>
										</td>
										<td headers="col2">
											<a href="https://github.com/suyeon0103/todo_list" target="_blank">Github Page</a>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</li>

	</div>
	
</div>
    ); 
}

export default Skils
