import {fireEvent, render,screen} from '@testing-library/react';
import {Counter} from './Counter'

describe('Counter component',() => {
	describe('initialised with defaultCount=0 and description="My Counter"', () => {

		beforeEach(() => {
				render(<Counter defaultCount={0} description="My Counter" />);
		});

		it('should render "Current Count: 0"', () => {	
			expect(screen.getByText('Current Count: 0')).toBeInTheDocument();		
		})

		it('should render title as "My Counter',()=> {
			expect(screen.getByText(/my counter/i)).toBeInTheDocument()
		})

		describe('when + is clicked',() => {
			it('should render "Current Count: 1"', () => {		
			fireEvent.click(screen.getByRole('button', {name: 'Add to Counter'}))
			expect(screen.getByText('Current Count: 1')).toBeInTheDocument();			
			})
		})

		describe('when - is clicked',()=> {			
			it('it should render "Current Count: -1"', () => {		
			fireEvent.click(screen.getByRole('button', {name: 'Subtract from Counter'}))
			expect(screen.getByText('Current Count: -1')).toBeInTheDocument();		
			})
		})
 })

})


