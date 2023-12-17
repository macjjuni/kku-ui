// import { render, fireEvent, screen } from '@testing-library/react'
// import Button from '@/components/KButton'

// test('Button 컴포넌트 렌더링 테스트', () => {
//   render(<Button text="Test" />)
//   const btnEle = screen.getByRole('button')
//   expect(btnEle).toBeInTheDocument()
// })

// test('Button 이벤트 클릭 테스트', () => {
//   let val = 0
//   const onTestClickEvent = () => {
//     val += 1
//   }
//   render(<Button text={'test'} onClick={onTestClickEvent} />)
//   const buttonEl = screen.getByText('test')
//   fireEvent.click(buttonEl)
//   expect(val).toBe(1)
// })
