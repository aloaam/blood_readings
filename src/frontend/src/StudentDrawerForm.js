import {Drawer,     Col, Select, Form, Row, Button, DatePicker, InputNumber} from 'antd';
import { addNewBloodReading } from './client'; 

const {Option} = Select;

function StudentDrawerForm({showDrawer, setShowDrawer}) {
    const onCLose = () => setShowDrawer(false);

    const onFinish = values => {
        alert(JSON.stringify(values, null, 2));
        // console.log(JSON.stringify(values, null, 2))
        addNewBloodReading(values)
    };

    const onFinishFailed = errorInfo => {
        alert(JSON.stringify(errorInfo, null, 2));
    };

    return <Drawer
        title="Create new blood reading"
        width={720}
        onClose={onCLose}
        visible={showDrawer}
        bodyStyle={{paddingBottom: 80}}
        footer={
            <div
                style={{
                    textAlign: 'right',
                }}
            >
                <Button onClick={onCLose} style={{marginRight: 8}}>
                    Cancel
                </Button>
            </div>
        }
    >
        <Form layout="vertical"
              onFinishFailed={onFinishFailed}
              onFinish={onFinish}
              hideRequiredMark>
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                        name="date"
                        label="DatePicker"
                        rules={[{required: true, message: 'Please enter the date of the reading'}]}
                    ><DatePicker/>
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        name="reading"
                        label="InputNumber"
                        rules={[{required: true, message: 'Please enter blood reading'}]}
                    ><InputNumber/>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                        name="timeOfReading"
                        label="Time of Reading"
                        rules={[{required: true, message: 'Please select select the time of reading'}]}
                    >
                        <Select placeholder="Please select a time of reading">
                            <Option value="HUNGER_BLOOD">HUNGER_BLOOD</Option>
                            <Option value="BEFORE_MEAL">BEFORE_MEAL</Option>
                            <Option value="AFTER_MEAL">AFTER_MEAL</Option>
                        </Select>
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <Form.Item >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    </Drawer>
}

export default StudentDrawerForm;