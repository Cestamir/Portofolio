
import { expItemsList } from './index'

const ExperincePage = () => {
  return (
    <section>
        <h1>Experience</h1>
        <ul>
            {expItemsList.map((item) => (
                <li key={item.name} className='exp-item'>
                    <h3>{item.name}</h3>
                    <p>{item.info}</p>
                    <h4>Skills learned: {item.skills}</h4>
                    <h3>Status: {item.status}</h3>
                </li>
            ))}
        </ul>
    </section>
  )
}

export default ExperincePage