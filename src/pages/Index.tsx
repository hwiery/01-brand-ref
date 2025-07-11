
import React from 'react';
import { ArrowRight, Star, Users, Zap, Target, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const services = [
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: "디지털 트랜스포메이션",
      description: "혁신적인 디지털 솔루션으로 비즈니스 성장을 가속화합니다.",
      color: "bg-gradient-to-br from-orange-500 to-orange-600"
    },
    {
      icon: <Target className="w-8 h-8 text-white" />,
      title: "브랜드 전략 컨설팅",
      description: "데이터 기반의 브랜드 전략으로 시장에서의 차별화를 실현합니다.",
      color: "bg-gradient-to-br from-blue-600 to-blue-700"
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "고객 경험 최적화",
      description: "고객 중심의 서비스 설계로 브랜드 가치를 극대화합니다.",
      color: "bg-gradient-to-br from-green-500 to-green-600"
    },
    {
      icon: <Star className="w-8 h-8 text-white" />,
      title: "크리에이티브 솔루션",
      description: "창의적 아이디어와 기술의 융합으로 혁신적 결과를 창출합니다.",
      color: "bg-gradient-to-br from-purple-500 to-purple-600"
    }
  ];

  const portfolioItems = [
    {
      title: "글로벌 이커머스 플랫폼",
      category: "디지털 트랜스포메이션",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      description: "매출 300% 증가 달성"
    },
    {
      title: "브랜드 리뉴얼 프로젝트",
      category: "브랜드 전략",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop",
      description: "브랜드 인지도 250% 향상"
    },
    {
      title: "고객 서비스 플랫폼",
      category: "고객 경험",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop",
      description: "고객 만족도 95% 달성"
    }
  ];

  const newsItems = [
    {
      date: "2024년 3월 15일",
      title: "디지털 혁신 어워드 수상",
      summary: "혁신적인 솔루션으로 업계 최고 권위의 상을 수상했습니다."
    },
    {
      date: "2024년 3월 10일",
      title: "글로벌 파트너십 체결",
      summary: "해외 진출을 위한 전략적 파트너십을 확대하고 있습니다."
    },
    {
      date: "2024년 3월 5일",
      title: "신규 서비스 런칭",
      summary: "AI 기반의 새로운 컨설팅 서비스를 공식 출시했습니다."
    }
  ];

  const partners = [
    "Samsung", "LG", "Naver", "Kakao", "Coupang", "SK", "KT", "Hyundai"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900">Brand.</div>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-orange-500 transition-colors">Home</a>
            <a href="#about" className="text-gray-700 hover:text-orange-500 transition-colors">About</a>
            <a href="#services" className="text-gray-700 hover:text-orange-500 transition-colors">Services</a>
            <a href="#portfolio" className="text-gray-700 hover:text-orange-500 transition-colors">Portfolio</a>
            <a href="#news" className="text-gray-700 hover:text-orange-500 transition-colors">News</a>
            <a href="#contact" className="text-gray-700 hover:text-orange-500 transition-colors">Contact</a>
          </nav>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">
            문의하기
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      {/* 메인 히어로 영역 배경 이미지 적용 (public 폴더에 nasa-Q1p7bh3SHj8-unsplash.jpg 파일을 추가하세요) */}
      <section id="home"
        className="pt-16 min-h-screen flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/nasa-Q1p7bh3SHj8-unsplash.jpg')" }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fade-in">
              혁신적 솔루션으로<br />
              <span className="text-orange-500">미래를 만듭니다</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in">
              디지털 트랜스포메이션부터 브랜드 전략까지,<br />
              고객의 성공이 우리의 목표입니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg">
                서비스 알아보기
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg">
                포트폴리오 보기
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              우리는 <span className="text-orange-500">혁신</span>과 <span className="text-blue-600">신뢰</span>를 만듭니다
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              10년 이상의 경험과 노하우를 바탕으로, 고객의 비즈니스 성장을 위한 
              최적의 솔루션을 제공합니다. 우리의 전문성과 창의성이 만나 
              새로운 가치를 창출합니다.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-500 mb-2">500+</div>
                <div className="text-gray-600">성공 프로젝트</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-gray-600">고객 만족도</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-500 mb-2">50+</div>
                <div className="text-gray-600">파트너사</div>
              </div>
            </div>
            <Button variant="outline" className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
              더 알아보기
              <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              전문 서비스
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              고객의 니즈에 맞춘 맞춤형 솔루션을 제공하여 비즈니스 성장을 지원합니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden">
                <CardContent className="p-0">
                  <div className={`${service.color} p-6 text-center`}>
                    <div className="mb-4 flex justify-center">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                    <Button variant="ghost" className="mt-4 text-orange-500 hover:text-orange-600 p-0">
                      자세히 보기
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Highlights */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              주요 프로젝트
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              다양한 분야에서 쌓은 경험과 성과를 확인해보세요.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-orange-500 font-medium mb-2">{item.category}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <Button variant="ghost" className="text-blue-600 hover:text-blue-700 p-0">
                    케이스 스터디 보기
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              전체 포트폴리오 보기
            </Button>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section id="news" className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              최신 소식
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              업계 동향과 우리의 성과를 공유합니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsItems.map((news, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{news.date}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{news.title}</h3>
                  <p className="text-gray-600 mb-4">{news.summary}</p>
                  <Button variant="ghost" className="text-orange-500 hover:text-orange-600 p-0">
                    자세히 읽기
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              신뢰받는 파트너
            </h2>
            <p className="text-gray-600">함께 성장하는 글로벌 기업들</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {partners.map((partner, index) => (
              <div key={index} className="text-2xl font-bold text-gray-400 hover:text-gray-600 transition-colors">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-20 bg-gradient-to-r from-orange-500 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              프로젝트를 시작할 준비가 되셨나요?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              전문가와 상담하고 맞춤형 솔루션을 받아보세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg">
                무료 상담 신청
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg">
                포트폴리오 다운로드
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold mb-4">Brand.</div>
              <p className="text-gray-400 mb-4">
                혁신적인 솔루션으로 고객의 성공을 만들어갑니다.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center cursor-pointer hover:bg-orange-600 transition-colors">
                  <span className="text-sm font-bold">F</span>
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                  <span className="text-sm font-bold">T</span>
                </div>
                <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center cursor-pointer hover:bg-green-600 transition-colors">
                  <span className="text-sm font-bold">I</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">서비스</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">디지털 트랜스포메이션</a></li>
                <li><a href="#" className="hover:text-white transition-colors">브랜드 전략</a></li>
                <li><a href="#" className="hover:text-white transition-colors">고객 경험</a></li>
                <li><a href="#" className="hover:text-white transition-colors">크리에이티브</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">회사</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">회사 소개</a></li>
                <li><a href="#" className="hover:text-white transition-colors">팀</a></li>
                <li><a href="#" className="hover:text-white transition-colors">채용</a></li>
                <li><a href="#" className="hover:text-white transition-colors">뉴스</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">연락처</h3>
              <div className="space-y-2 text-gray-400">
                <p>서울특별시 강남구</p>
                <p>+82 02-1234-5678</p>
                <p>contact@brand.com</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Brand. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
