"use client"

import React, { useState } from 'react';
import { 
  Card, 
  Table, 
  Tag, 
  Button, 
  Tabs, 
  Progress, 
  Alert, 
  Timeline, 
  Statistic, 
  Row, 
  Col,
  Divider,
  Badge,
  Space,
  Typography
} from 'antd';
import { 
  ClockCircleOutlined,
  CheckCircleOutlined,
  AlertOutlined,
  CalendarOutlined,
  TrophyOutlined,
  HeartOutlined,
  FireOutlined,
  UserOutlined
} from '@ant-design/icons';
import { TrendingUp } from 'lucide-react';

const { Title, Text, Paragraph } = Typography;
const { TabPane } = Tabs;

const MealPlanProtocol = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [completedMeals, setCompletedMeals] = useState({
    breakfast: false,
    morningSnack: false,
    lunch: false,
    afternoonSnack: false,
    dinner: false
  });

  const protocols = [
    { 
      key: '1', 
      siNo: 1, 
      planName: 'Meal Plan', 
      priority: 'high',
      keyPoint: 2,
      status: 'active'
    },
    { 
      key: '2', 
      siNo: 2, 
      planName: 'Workout', 
      priority: 'high',
      keyPoint: 2,
      status: 'inactive'
    },
    { 
      key: '3', 
      siNo: 3, 
      planName: 'Supplement', 
      priority: 'medium',
      keyPoint: 2,
      status: 'inactive'
    },
    { 
      key: '4', 
      siNo: 4, 
      planName: 'Life style changes', 
      priority: 'medium',
      keyPoint: 2,
      status: 'inactive'
    }
  ];

  const protocolColumns = [
    {
      title: 'SI No',
      dataIndex: 'siNo',
      key: 'siNo',
      width: 80,
    },
    {
      title: 'Plan Name',
      dataIndex: 'planName',
      key: 'planName',
      render: (text, record) => (
        <Space>
          {record.status === 'active' && <Badge status="processing" />}
          <Text strong={record.status === 'active'}>{text}</Text>
        </Space>
      ),
    },
    {
      title: 'Priority',
      dataIndex: 'priority',
      key: 'priority',
      render: (priority) => (
        <Tag color={priority === 'high' ? 'red' : 'orange'}>
          {priority.toUpperCase()}
        </Tag>
      ),
    },
    {
      title: 'Key Point',
      dataIndex: 'keyPoint',
      key: 'keyPoint',
    },
  ];

  const mealSchedule = [
    {
      time: '7:00 - 9:00 AM',
      meal: 'Breakfast',
      icon: '🌅',
      key: 'breakfast',
      description: 'Never skip! Start your day with high-quality protein, complex carbohydrates, and fresh fruits.',
      foods: ['Eggs/Greek yogurt', 'Oats/whole grain bread', 'Fresh fruits', 'Nuts/seeds'],
      tip: 'Prepare overnight oats or egg muffins for busy mornings'
    },
    {
      time: '10:30 - 11:00 AM',
      meal: 'Mid-Morning Snack',
      icon: '🍎',
      key: 'morningSnack',
      description: 'Light, nutritious snack to maintain energy levels.',
      foods: ['Fresh fruit with nuts', 'Vegetable sticks with hummus', 'Green tea'],
      tip: 'Keep portion sizes moderate'
    },
    {
      time: '12:30 - 1:30 PM',
      meal: 'Lunch',
      icon: '🥗',
      key: 'lunch',
      description: 'Balanced meal with lean protein, vegetables, and complex carbs.',
      foods: ['Lean protein (chicken/fish/legumes)', 'Colorful vegetables', 'Whole grains', 'Healthy fats'],
      tip: 'Use healthy cooking methods like grilling or steaming'
    },
    {
      time: '3:30 - 4:00 PM',
      meal: 'Afternoon Snack',
      icon: '🥜',
      key: 'afternoonSnack',
      description: 'Protein-rich options to avoid afternoon energy dips.',
      foods: ['Yogurt/cheese', 'Nuts/seeds', 'Herbal tea'],
      tip: 'Avoid sugary snacks that cause energy crashes'
    },
    {
      time: '7:00 - 8:00 PM',
      meal: 'Dinner',
      icon: '🍲',
      key: 'dinner',
      description: 'Lighter than lunch but nutritionally complete.',
      foods: ['Lean proteins', 'Plenty of vegetables', 'Limited carbohydrates', 'Healthy preparation'],
      tip: 'Finish eating 2-3 hours before bedtime'
    }
  ];

  const nutritionalGuidelines = [
    {
      nutrient: 'Proteins',
      percentage: '25-30%',
      color: '#ff7875',
      foods: ['Lean meats', 'Fish & eggs', 'Legumes', 'Dairy products'],
      icon: '🥩'
    },
    {
      nutrient: 'Carbohydrates',
      percentage: '40-45%',
      color: '#ffc069',
      foods: ['Whole grains', 'Fruits & vegetables', 'Legumes', 'Avoid refined sugars'],
      icon: '🌾'
    },
    {
      nutrient: 'Healthy Fats',
      percentage: '25-30%',
      color: '#95de64',
      foods: ['Olive oil', 'Avocados', 'Nuts & seeds', 'Fatty fish'],
      icon: '🥑'
    }
  ];

  const handleMealComplete = (mealKey) => {
    setCompletedMeals(prev => ({
      ...prev,
      [mealKey]: !prev[mealKey]
    }));
  };

  const completedCount = Object.values(completedMeals).filter(Boolean).length;
  const progressPercentage = (completedCount / 5) * 100;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="  mx-auto">
        <Row gutter={24}>
          {/* Sidebar */}
          <Col xs={24} lg={8}>
            <Card className="mb-6">
              <Title level={4} className="mb-4">Protocols</Title>
              <Table 
                dataSource={protocols}
                columns={protocolColumns}
                pagination={false}
                size="small"
                rowClassName={(record) => 
                  record.status === 'active' ? 'bg-blue-50' : ''
                }
              />
            </Card>

            {/* Daily Progress */}
            <Card>
              <Title level={5}>Today's Progress</Title>
              <Progress 
                percent={progressPercentage} 
                strokeColor="#52c41a"
                className="mb-4"
              />
              <Row gutter={16}>
                <Col span={12}>
                  <Statistic 
                    title="Meals Completed" 
                    value={completedCount}
                    suffix="/ 5"
                    prefix={<CheckCircleOutlined />}
                  />
                </Col>
                <Col span={12}>
                  <Statistic 
                    title="Progress" 
                    value={progressPercentage}
                    suffix="%"
                    prefix={<TrophyOutlined />}
                  />
                </Col>
              </Row>
            </Card>
          </Col>

          {/* Main Content */}
          <Col xs={24} lg={16}>
            <Card>
              <Title level={2} className="text-center mb-6">
                <HeartOutlined className="text-red-500 mr-2" />
                Comprehensive Meal Plan Protocol
              </Title>

              <Tabs activeKey={activeTab} onChange={setActiveTab} className="mb-6">
                <TabPane tab="Overview" key="overview">
                  <Alert
                    message="Key Principles"
                    description={
                      <ul className="mt-3 space-y-2">
                        <li>• <Text strong>Personalized nutrition approach</Text> - Tailored to individual dietary needs</li>
                        <li>• <Text strong>Breakfast is essential</Text> - Never skip the most important meal</li>
                        <li>• <Text strong>Balanced macronutrients</Text> - Optimal ratio of proteins, carbs, and fats</li>
                        <li>• <Text strong>Portion control</Text> - Mindful eating and appropriate serving sizes</li>
                        <li>• <Text strong>Hydration priority</Text> - Adequate water intake throughout the day</li>
                        <li>• <Text strong>Timing matters</Text> - Regular meal schedule for metabolic health</li>
                      </ul>
                    }
                    type="info"
                    showIcon
                    className="mb-6"
                  />

                  {/* Nutritional Guidelines */}
                  <Title level={4}>Nutritional Distribution</Title>
                  <Row gutter={16} className="mb-6">
                    {nutritionalGuidelines.map((item, index) => (
                      <Col xs={24} sm={8} key={index}>
                        <Card size="small" className="h-full">
                          <div className="text-center">
                            <div className="text-2xl mb-2">{item.icon}</div>
                            <Title level={5}>{item.nutrient}</Title>
                            <Tag color={item.color} className="mb-3">{item.percentage}</Tag>
                            <ul className="text-left text-sm">
                              {item.foods.map((food, idx) => (
                                <li key={idx}>• {food}</li>
                              ))}
                            </ul>
                          </div>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </TabPane>

                <TabPane tab="Daily Schedule" key="schedule">
                  <Title level={4}>
                    <CalendarOutlined className="mr-2" />
                    Daily Meal Schedule
                  </Title>
                  
                  <Timeline className="mt-6">
                    {mealSchedule.map((meal, index) => (
                      <Timeline.Item
                        key={meal.key}
                        dot={
                          <Button
                            type={completedMeals[meal.key] ? "primary" : "default"}
                            shape="circle"
                            icon={completedMeals[meal.key] ? <CheckCircleOutlined /> : <ClockCircleOutlined />}
                            onClick={() => handleMealComplete(meal.key)}
                            className="border-0 shadow-md"
                          />
                        }
                      >
                        <Card size="small" className={`ml-4 ${completedMeals[meal.key] ? 'bg-green-50 border-green-200' : ''}`}>
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <Title level={5} className="mb-1">
                                {meal.icon} {meal.meal}
                              </Title>
                              <Text type="secondary">{meal.time}</Text>
                            </div>
                            <Tag color={completedMeals[meal.key] ? 'green' : 'default'}>
                              {completedMeals[meal.key] ? 'Completed' : 'Pending'}
                            </Tag>
                          </div>
                          <Paragraph className="mb-3">{meal.description}</Paragraph>
                          <div className="grid grid-cols-2 gap-2 mb-3">
                            {meal.foods.map((food, idx) => (
                              <Tag key={idx} className="m-1">{food}</Tag>
                            ))}
                          </div>
                          <Alert 
                            message={`💡 Tip: ${meal.tip}`}
                            type="info"
                            showIcon={false}
                            className="bg-blue-50 border-blue-200"
                          />
                        </Card>
                      </Timeline.Item>
                    ))}
                  </Timeline>
                </TabPane>

                <TabPane tab="Guidelines" key="guidelines">
                  <Row gutter={24}>
                    <Col xs={24} md={12}>
                      <Card title="✅ Do's" type="inner" className="h-full">
                        <ul className="space-y-2">
                          <li>• Eat regular, scheduled meals</li>
                          <li>• Stay hydrated (8-10 glasses of water daily)</li>
                          <li>• Include variety in your diet</li>
                          <li>• Practice mindful eating</li>
                          <li>• Plan and prep meals in advance</li>
                          <li>• Read nutrition labels</li>
                          <li>• Listen to your body's hunger cues</li>
                          <li>• Include physical activity</li>
                        </ul>
                      </Card>
                    </Col>
                    <Col xs={24} md={12}>
                      <Card title="❌ Don'ts" type="inner" className="h-full">
                        <ul className="space-y-2">
                          <li>• Skip breakfast or any main meal</li>
                          <li>• Eat late at night (after 8 PM)</li>
                          <li>• Consume excessive processed foods</li>
                          <li>• Drink sugary beverages regularly</li>
                          <li>• Eat while distracted (TV, phone)</li>
                          <li>• Follow extreme restrictive diets</li>
                          <li>• Ignore portion sizes</li>
                          <li>• Rush through meals</li>
                        </ul>
                      </Card>
                    </Col>
                  </Row>

                  <Divider />

                  <Card title="🏃‍♀️ Activity Integration" className="mb-6">
                    <Row gutter={16}>
                      <Col xs={24} sm={8}>
                        <Card size="small" title="Pre-Workout" type="inner">
                          <Text>Light snack 30-60 minutes before</Text>
                          <div className="mt-2">
                            <Tag>Banana</Tag>
                            <Tag>Small portion of nuts</Tag>
                          </div>
                        </Card>
                      </Col>
                      <Col xs={24} sm={8}>
                        <Card size="small" title="Post-Workout" type="inner">
                          <Text>Protein and carbs within 30 minutes</Text>
                          <div className="mt-2">
                            <Tag>Protein shake</Tag>
                            <Tag>Whole grain toast with PB</Tag>
                          </div>
                        </Card>
                      </Col>
                      <Col xs={24} sm={8}>
                        <Card size="small" title="Rest Days" type="inner">
                          <Text>Maintain regular schedule</Text>
                          <div className="mt-2">
                            <Tag>Adjust portions</Tag>
                            <Tag>Focus on hydration</Tag>
                          </div>
                        </Card>
                      </Col>
                    </Row>
                  </Card>
                </TabPane>

                <TabPane tab="Tracking" key="tracking">
                  <Alert
                    message="Tracking & Monitoring"
                    description={
                      <div className="mt-4">
                        <Row gutter={16}>
                          <Col xs={24} md={12}>
                            <Card size="small" title="Daily Tracking" type="inner">
                              <ul className="space-y-1">
                                <li>• Food diary for first 2 weeks</li>
                                <li>• Energy levels throughout day</li>
                                <li>• Hydration intake</li>
                                <li>• Meal timing consistency</li>
                              </ul>
                            </Card>
                          </Col>
                          <Col xs={24} md={12}>
                            <Card size="small" title="Weekly/Monthly" type="inner">
                              <ul className="space-y-1">
                                <li>• Weight and body composition</li>
                                <li>• Digestive health assessment</li>
                                <li>• Food sensitivity tracking</li>
                                <li>• Plan review and adjustments</li>
                              </ul>
                            </Card>
                          </Col>
                        </Row>
                      </div>
                    }
                    type="info"
                    showIcon
                    icon={<TrendingUp />}
                  />

                  <Divider />

                  <Card title="📊 Progress Metrics" className="text-center">
                    <Row gutter={16}>
                      <Col xs={12} sm={6}>
                        <Statistic 
                          title="Meals Today" 
                          value={completedCount}
                          suffix="/ 5"
                          valueStyle={{ color: '#3f8600' }}
                        />
                      </Col>
                      <Col xs={12} sm={6}>
                        <Statistic 
                          title="Weekly Avg" 
                          value={4.2}
                          suffix="/ 5"
                          valueStyle={{ color: '#cf1322' }}
                        />
                      </Col>
                      <Col xs={12} sm={6}>
                        <Statistic 
                          title="Hydration" 
                          value={6}
                          suffix="/ 8 glasses"
                          valueStyle={{ color: '#1890ff' }}
                        />
                      </Col>
                      <Col xs={12} sm={6}>
                        <Statistic 
                          title="Consistency" 
                          value={85}
                          suffix="%"
                          valueStyle={{ color: '#722ed1' }}
                        />
                      </Col>
                    </Row>
                  </Card>
                </TabPane>
              </Tabs>

              <Card className="bg-blue-50 border-blue-200">
                <div className="text-center">
                  <UserOutlined className="text-4xl text-blue-500 mb-4" />
                  <Title level={4}>Need Personalized Help?</Title>
                  <Paragraph className="mb-4">
                    Get professional guidance from a certified nutritionist or dietitian for a meal plan 
                    tailored specifically to your health goals, dietary restrictions, and lifestyle.
                  </Paragraph>
                  <Button type="primary" size="large" danger icon={<HeartOutlined />}>
                    View Specialist
                  </Button>
                  <Paragraph className="mt-3 text-gray-600">
                    A specialist can help with specific conditions like diabetes, heart disease, 
                    allergies, or weight management goals.
                  </Paragraph>
                </div>
              </Card>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default MealPlanProtocol;
