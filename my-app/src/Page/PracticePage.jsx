import React from 'react';
import { useState, useEffect } from 'react';
import '../Style/PageStyle/PracticePage.css';

const PracticePage = () => {
	const [keyword, setKeyword] = useState('');
	const [counter, setCounter] = useState(0);
	const [showing, setShowing] = useState(false);

	const btnClickFunc = () => {
		setCounter(counter => counter + 1);
	};

	const inputChangeFunc = event => {
		setKeyword(event.target.value);
	};

	const checkShowingState = () => {
		setShowing(prev => !prev);
	};

	const Hello = () => {
		useEffect(() => {
			console.log('created component ');
			return () => console.log('destroyed component');
		}, []);
		// 이건 웹이 처음 렌더링 될 때는 안나오겠지, 왜냐면? 처음 값 셋팅이 false 니까
		// 토글이 되면서 다시 Hello가 불릴 때 마다 한번만 실행 되겠지
		// 이게 바로 컴포넌트의 생성(create), 소멸(destroy)
		return <p id="toggleonP"> toggle On </p>;
	};

	console.log('hello');
	// counter 클릭해도 이거 나오고 keyword 바껴도 이거 나와
	// 왜 ? state가 바뀌면서 이게 통째로 다시 렌더링 되거든 그걸 막아주려고 useEffect 하는거야

	// 결론적으로 hello는 뭐가 바뀔 때 마다 그게 뭐든간에 무조건 실행

	useEffect(() => {
		console.log('hello i am useEffect from counter ');
	}, [counter]);

	useEffect(() => {
		if (keyword.length >= 5) {
			// 5자리 이상이여야 됨
			console.log('hello i am useEffect from keyword ');
		}
	}, [keyword]);
	// 키워드에 아무것도 없는데도 실행되잖아? => 조건 걸어주자

	useEffect(() => {
		console.log('hello i am useEffect from counter, keyword ');
	}, [counter, keyword]);

	return (
		<div id="practicePageDiv">
			<div className="practiceContentDiv">
				<h1 id="TitleP"> 공부했던 내용 기록해두기 </h1>
			</div>
			<div className="practiceContentDiv">
				<p>
					* console.log("hello"); <br />= {'>'} counter 클릭해도 이거 나오고 keyword
					바껴도 이거 나와 <br />= {'>'} 왜 ? state가 바뀌면서 이게 통째로 다시 렌더링
					되거든 그걸 막아주려고 useEffect 하는거야 <br />= {'>'} 결론적으로 hello는 뭐가
					바뀔 때 마다 그게 뭐든간에 무조건 실행 <br />
				</p>{' '}
			</div>
			<div className="practiceContentDiv">
				<p>
					{' '}
					* Another thing that React Strict Mode does is run certain callbacks/methods
					twice (in DEV mode ONLY).
				</p>{' '}
			</div>
			<div className="practiceContentDiv">
				<p>
					* useEffect : [] 으로 인자 주면 웹 처음 렌더링 될 때 딱 한번만 실행되고 그 뒤론
					절대 실행 안된다, <br />={'>'} 리액트가 지켜보고 있을게 아무것도 없으니까 한번만
					실행되고 실행 x <br />={'>'} 그 괄호 [], 리액트가 쳐다보고 있는 그거를,
					React.DependencyList 라고 한다.
				</p>{' '}
				<p> 그럼 만약 동일한 값으로 state 값이 업데이트 될 때의 useEffect 리렌더링 ? </p>
				<p>
					<a
						href="https://velog.io/@zwon/%EB%8F%99%EC%9D%BC%ED%95%9C-%EA%B0%92%EC%9C%BC%EB%A1%9C-%EC%97%85%EB%8D%B0%EC%9D%B4%ED%8A%B8-%ED%96%88%EC%9D%84-%EB%95%8C-%EB%A6%AC%EB%A0%8C%EB%8D%94%EB%A7%81-useEffect-%EB%8F%99%EC%9E%91-%EC%9B%90%EB%A6%AC"
						target="_blank"
						rel="noopener noreferrer"
					>
						{' '}
						Velog-zwon
					</a>
				</p>
			</div>
			<div className="practiceContentDiv">
				<p> Counter 예제 </p>
				<div id="CounterBtnDiv">
					<button id="CounterBtn" onClick={btnClickFunc}>
						Click !!{' '}
					</button>
					<p id="CounterP">Counter : {counter}</p>
				</div>
			</div>
			<div className="practiceContentDiv">
				<p> Keyword 입력 예제 </p>
				<div id="KeywordDiv">
					<input
						id="KeywordInput"
						value={keyword}
						type="text"
						onChange={inputChangeFunc}
						placeholder="Here !!"
					/>
					<p id="KeywordP"> 입력한 내용 : {keyword}</p>
				</div>
			</div>

			<div className="practiceContentDiv">
				<p> Toggle 버튼 예제 </p>
				<div id="ToggleDiv">
					<button id="ToggleBtn" onClick={checkShowingState}>
						Click !!{' '}
					</button>
					<div id="ToggleP">{showing ? <Hello /> : ''}</div>
				</div>
			</div>

			<div className="practiceContentDiv">
				<p>
					useEffect ( () ={'>'} {'{'} <br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'console.log'}("Helllo from useEffect !! "){' '}
					<br />
					{'}'}, []); <br />
					이건 웹이 처음 렌더링 될 때는 안나오겠지, 왜냐면? 처음 값 셋팅이 false 니까{' '}
					<br />
					토글이 되면서 다시 Hello가 불릴 때 마다 한번만 실행 되겠지 <br />
					이게 바로 컴포넌트의 생성(create), 소멸(destroy) <br />
					숨기는 게 아니라 아예 없애는거야 <br />
					<br />
					만약에 소멸(destroy) 될 때도 뭔가를 출력해주고 싶다!! 그럼 어떻게 해줘야 할까?{' '}
					<br />={'>'} CleanUp Function 이라고 한다. useEffect 가 끝날 때 함수를
					리턴해주기
				</p>
			</div>
		</div>
	);
};

export default PracticePage;
