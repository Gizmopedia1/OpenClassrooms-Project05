import './LogementTemplate.scss'
import Collapse from '../../components/Collapse/Collapse.jsx'
// import logements from '../../data/logements.json'
import LogementExemple from './LogementTemplate.js'

function LogementTemplate() {
    return (
      <>
        <div>
          <div className="two-collapse">
            {LogementExemple.map(item => (
                  <Collapse key={item.id} title='Description'>
                    <p>{item.description}</p>
                  </Collapse>
            ))}
            <Collapse title='Équipements'>
                <ul>
                    {LogementExemple.map(item => (
                        <li key={item.id}>{item.equipments}</li>
                    ))}
                </ul>
            </Collapse>

          </div>
        </div>
      </>
    )
  }
  
  export default LogementTemplate