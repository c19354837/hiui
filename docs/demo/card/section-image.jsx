import React from 'react'
import DocViewer from '../../../libs/doc-viewer'
import Card from '../../../components/card'
const prefix = 'card-image'
const code = `import React from 'react'
import Card from '@hi-ui/hiui/es/card'\n
class Demo extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Card
          hoverable
          coverUrl='http://i1.mifile.cn/f/i/hiui/docs/pic_9.png'
          title='图片展示'
          content='图片信息描述：size=small;width:276px'
          size='small'
        ></Card>
        <br />
        <Card
          hoverable
          coverUrl='http://i1.mifile.cn/f/i/hiui/docs/pic_10.png'
          title='图片展示'
          content='图片信息描述：size=middle;width:376px'
          size='default'
        ></Card>

        <br />
        <Card
          hoverable
          coverUrl='http://i1.mifile.cn/f/i/hiui/docs/pic_2.png'
          title='图片展示'
          content='图片信息描述：size=large;width:576px'
          size='large'
        ></Card>
      </React.Fragment>
    )
  }
}`
const DemoImage = () => <DocViewer code={code} scope={{ Card }} prefix={prefix} />
export default DemoImage
