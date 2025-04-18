import './TwoCollapse.scss'
import Collapse from '../../components/Collapse/Collapse.jsx'


function TwoCollapse({ title1, title2, content, list }) {
  
    return (
      <>
          <div className="two-collapse">
            <Collapse title={title1} content={content} />
            <Collapse title={title2} list={list} />
        </div>
      </>
    )
  
}  
  export default TwoCollapse