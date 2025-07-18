import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { 
  Users, 
  Calendar, 
  Clock, 
  Dumbbell, 
  Trophy,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Flame,
  Target,
  Heart,
  Zap,
  X,
  CheckCircle,
  Check,
  Star,
  Crown,
  Shield,
  UserCheck
} from 'lucide-react';

interface ClassSchedule {
  id: string;
  title: string;
  instructor: string;
  time: string;
  duration: string;
  difficulty: string;
  spots: number;
  description: string;
}

interface MembershipPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  popular?: boolean;
  features: string[];
  icon: React.ReactNode;
  color: string;
  description: string;
}

function App() {
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [showMembershipModal, setShowMembershipModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<MembershipPlan | null>(null);
  const [membershipSuccess, setMembershipSuccess] = useState(false);
  const [showConsultationModal, setShowConsultationModal] = useState(false);
  const [consultationSuccess, setConsultationSuccess] = useState(false);

  const membershipPlans: MembershipPlan[] = [
    {
      id: 'basic',
      name: 'Basic',
      price: 29,
      period: 'month',
      description: 'Perfect for getting started',
      icon: <Dumbbell className="h-8 w-8" />,
      color: 'from-gray-500 to-gray-600',
      features: [
        'Gym access during staffed hours',
        'Basic equipment access',
        'Locker room access',
        'Free fitness assessment',
        'Mobile app access'
      ]
    },
    {
      id: 'premium',
      name: 'Premium',
      price: 59,
      period: 'month',
      popular: true,
      description: 'Most popular choice',
      icon: <Star className="h-8 w-8" />,
      color: 'from-red-500 to-red-600',
      features: [
        '24/7 gym access',
        'All equipment access',
        'Group classes included',
        'Personal trainer consultation',
        'Nutrition guidance',
        'Guest passes (2/month)',
        'Premium locker access'
      ]
    },
    {
      id: 'elite',
      name: 'Elite',
      price: 99,
      period: 'month',
      description: 'Ultimate fitness experience',
      icon: <Crown className="h-8 w-8" />,
      color: 'from-yellow-500 to-yellow-600',
      features: [
        'Everything in Premium',
        'Unlimited personal training',
        'VIP locker room access',
        'Massage therapy sessions',
        'Meal prep services',
        'Priority class booking',
        'Unlimited guest passes',
        'Exclusive member events'
      ]
    }
  ];

  const classSchedules: Record<string, ClassSchedule[]> = {
    'Beast Mode': [
      {
        id: 'beast-1',
        title: 'Beast Mode - Morning Power',
        instructor: 'Mike "The Beast" Johnson',
        time: 'Mon, Wed, Fri - 6:00 AM',
        duration: '60 min',
        difficulty: 'Advanced',
        spots: 8,
        description: 'Intense strength training focusing on compound movements and heavy lifting.'
      },
      {
        id: 'beast-2',
        title: 'Beast Mode - Evening Grind',
        instructor: 'Sarah "Iron" Williams',
        time: 'Tue, Thu - 7:00 PM',
        duration: '75 min',
        difficulty: 'Intermediate',
        spots: 12,
        description: 'Build raw strength with progressive overload and functional movements.'
      }
    ],
    'Cardio Rush': [
      {
        id: 'cardio-1',
        title: 'Cardio Rush - HIIT Blast',
        instructor: 'Alex "Lightning" Rodriguez',
        time: 'Mon, Wed, Fri - 7:00 AM',
        duration: '45 min',
        difficulty: 'All Levels',
        spots: 15,
        description: 'High-intensity interval training to torch calories and boost endurance.'
      },
      {
        id: 'cardio-2',
        title: 'Cardio Rush - Spin & Burn',
        instructor: 'Emma "Cyclone" Davis',
        time: 'Tue, Thu, Sat - 6:30 PM',
        duration: '50 min',
        difficulty: 'Intermediate',
        spots: 20,
        description: 'Heart-pumping spin class with energizing music and challenging intervals.'
      }
    ],
    'Zen Zone': [
      {
        id: 'zen-1',
        title: 'Zen Zone - Morning Flow',
        instructor: 'Luna "Serenity" Chen',
        time: 'Daily - 8:00 AM',
        duration: '60 min',
        difficulty: 'Beginner',
        spots: 25,
        description: 'Gentle yoga flow to center your mind and strengthen your body.'
      },
      {
        id: 'zen-2',
        title: 'Zen Zone - Meditation & Stretch',
        instructor: 'David "Mindful" Thompson',
        time: 'Mon, Wed, Fri - 8:00 PM',
        duration: '45 min',
        difficulty: 'All Levels',
        spots: 18,
        description: 'Relaxing session combining meditation, breathing, and deep stretching.'
      }
    ]
  };

  const handleJoinClass = (className: string) => {
    setSelectedClass(className);
    setShowBookingModal(true);
    setBookingSuccess(false);
  };

  const handleBookClass = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
    setTimeout(() => {
      setShowBookingModal(false);
      setBookingSuccess(false);
      setSelectedClass(null);
    }, 2000);
  };

  const handleSelectPlan = (plan: MembershipPlan) => {
    setSelectedPlan(plan);
    setShowMembershipModal(true);
    setMembershipSuccess(false);
  };

  const handleMembershipSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setMembershipSuccess(true);
    setTimeout(() => {
      setShowMembershipModal(false);
      setMembershipSuccess(false);
      setSelectedPlan(null);
    }, 2000);
  };

  const handleScheduleConsultation = () => {
    setShowConsultationModal(true);
    setConsultationSuccess(false);
  };

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConsultationSuccess(true);
    setTimeout(() => {
      setShowConsultationModal(false);
      setConsultationSuccess(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
            className="w-full h-full object-cover"
            alt="Gym"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-red-900/50"></div>
        </div>
        
        <div className="relative h-full flex items-center justify-center text-center text-white px-4">
          <div className="transform hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center mb-6">
              <Flame className="h-16 w-16 text-red-500 animate-pulse" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="text-red-500">UNLEASH</span> YOUR POTENTIAL
            </h1>
            <p className="text-xl md:text-2xl mb-8">Where legends are made 💪</p>
            <div className="space-x-4">
              <a 
                href="#membership" 
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-red-500/50 transform hover:-translate-y-1"
              >
                Start Your Journey
              </a>
              <a 
                href="#classes" 
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg"
              >
                Explore Classes
              </a>
            </div>
          </div>
        </div>

        {/* Animated Stats */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm text-white py-6">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center transform hover:scale-105 transition-transform">
              <div className="text-3xl font-bold text-red-500">1,000+</div>
              <div className="text-sm">Active Members</div>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform">
              <div className="text-3xl font-bold text-red-500">50+</div>
              <div className="text-sm">Weekly Classes</div>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform">
              <div className="text-3xl font-bold text-red-500">20+</div>
              <div className="text-sm">Expert Trainers</div>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform">
              <div className="text-3xl font-bold text-red-500">24/7</div>
              <div className="text-sm">Gym Access</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Zap className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4">Why Choose Us?</h2>
            <p className="text-xl text-gray-600">Experience the Power Gym difference</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="group bg-gray-50 p-8 rounded-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <div className="bg-red-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Expert Trainers</h3>
              <p className="text-gray-600 text-center">Professional guidance for your fitness journey</p>
            </div>
            <div className="group bg-gray-50 p-8 rounded-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <div className="bg-red-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">24/7 Access</h3>
              <p className="text-gray-600 text-center">Train on your schedule</p>
            </div>
            <div className="group bg-gray-50 p-8 rounded-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <div className="bg-red-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform">
                <Dumbbell className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Modern Equipment</h3>
              <p className="text-gray-600 text-center">State-of-the-art facilities</p>
            </div>
            <div className="group bg-gray-50 p-8 rounded-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <div className="bg-red-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Community</h3>
              <p className="text-gray-600 text-center">Join our fitness family</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Target className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4">Our Story</h2>
            <p className="text-xl text-gray-300">Building stronger bodies and minds since 2010</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="group">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
                  alt="Gym Interior"
                  className="rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6">More Than Just a Gym</h3>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Founded with a passion for fitness and wellness, Power Gym has been helping people achieve their fitness goals for over a decade. Our state-of-the-art facility and expert trainers are committed to your success.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl transform hover:scale-105 transition-all duration-300">
                  <h4 className="font-bold mb-2 text-red-500">Mission</h4>
                  <p className="text-gray-300">To inspire and empower through fitness</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl transform hover:scale-105 transition-all duration-300">
                  <h4 className="font-bold mb-2 text-red-500">Vision</h4>
                  <p className="text-gray-300">Creating a healthier community</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section id="membership" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Shield className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4">Choose Your Plan</h2>
            <p className="text-xl text-gray-600">Find the perfect membership for your fitness journey</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipPlans.map((plan) => (
              <div 
                key={plan.id} 
                className={`relative group bg-white rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 overflow-hidden ${
                  plan.popular ? 'ring-4 ring-red-500 ring-opacity-50' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-red-500 text-white text-center py-2 text-sm font-semibold">
                    MOST POPULAR
                  </div>
                )}
                
                <div className={`bg-gradient-to-r ${plan.color} p-8 text-white ${plan.popular ? 'pt-12' : ''}`}>
                  <div className="flex items-center justify-center mb-4">
                    <div className="bg-white/20 p-3 rounded-xl">
                      {plan.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-2">{plan.name}</h3>
                  <p className="text-center opacity-90 mb-4">{plan.description}</p>
                  <div className="text-center">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-lg opacity-90">/{plan.period}</span>
                  </div>
                </div>
                
                <div className="p-8">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    onClick={() => handleSelectPlan(plan)}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                      plan.popular 
                        ? 'bg-red-500 text-white hover:bg-red-600 shadow-lg hover:shadow-red-500/50' 
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Choose {plan.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Not sure which plan is right for you?</h3>
              <p className="text-gray-600 mb-6">Get a free consultation with our fitness experts to find your perfect match.</p>
              <button 
                onClick={handleScheduleConsultation}
                className="bg-red-500 text-white px-8 py-3 rounded-lg hover:bg-red-600 transition-colors font-semibold transform hover:scale-105 transition-all duration-300"
              >
                Schedule Free Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Free Consultation Modal */}
      {showConsultationModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center">
                <UserCheck className="h-8 w-8 text-red-500 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Schedule Free Consultation</h2>
              </div>
              <button 
                onClick={() => setShowConsultationModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            {consultationSuccess ? (
              <div className="p-8 text-center">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Consultation Scheduled!</h3>
                <p className="text-gray-600">Our fitness expert will contact you within 24 hours to confirm your appointment. Get ready to start your transformation!</p>
              </div>
            ) : (
              <div className="p-6">
                <div className="mb-6 p-4 bg-red-50 rounded-lg border border-red-200">
                  <h3 className="font-bold text-lg text-red-800 mb-2">What to Expect:</h3>
                  <ul className="text-red-700 space-y-1 text-sm">
                    <li>• 30-minute one-on-one session with a certified trainer</li>
                    <li>• Fitness assessment and goal setting</li>
                    <li>• Personalized workout plan recommendations</li>
                    <li>• Nutrition guidance and tips</li>
                    <li>• Tour of our facilities and equipment</li>
                    <li>• No obligation - completely free!</li>
                  </ul>
                </div>
                
                <form onSubmit={handleConsultationSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Enter your first name" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Enter your last name" 
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Enter your email" 
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Enter your phone number" 
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                    <input 
                      type="date" 
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time</label>
                    <select 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                      <option value="">Select a time</option>
                      <option value="9:00 AM">9:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="12:00 PM">12:00 PM</option>
                      <option value="1:00 PM">1:00 PM</option>
                      <option value="2:00 PM">2:00 PM</option>
                      <option value="3:00 PM">3:00 PM</option>
                      <option value="4:00 PM">4:00 PM</option>
                      <option value="5:00 PM">5:00 PM</option>
                      <option value="6:00 PM">6:00 PM</option>
                      <option value="7:00 PM">7:00 PM</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Current Fitness Level</label>
                    <select 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                      <option value="">Select your fitness level</option>
                      <option value="beginner">Beginner - New to fitness</option>
                      <option value="intermediate">Intermediate - Some experience</option>
                      <option value="advanced">Advanced - Very experienced</option>
                      <option value="returning">Returning - Getting back into fitness</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Primary Fitness Goals</label>
                    <textarea 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      rows={3}
                      placeholder="Tell us about your fitness goals (weight loss, muscle gain, general health, etc.)"
                    ></textarea>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Any Health Concerns or Injuries? (Optional)</label>
                    <textarea 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      rows={2}
                      placeholder="Any injuries, medical conditions, or physical limitations we should know about?"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-red-500 text-white py-3 px-6 rounded-lg hover:bg-red-600 transform hover:scale-105 transition-all duration-300 font-semibold"
                  >
                    Schedule My Free Consultation
                  </button>
                  
                  <p className="text-xs text-gray-500 text-center">
                    No commitment required. Our expert will contact you within 24 hours to confirm your appointment.
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Membership Modal */}
      {showMembershipModal && selectedPlan && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Join {selectedPlan.name} Membership</h2>
              <button 
                onClick={() => setShowMembershipModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            {membershipSuccess ? (
              <div className="p-8 text-center">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Welcome to Power Gym!</h3>
                <p className="text-gray-600">Your {selectedPlan.name} membership is now active. Check your email for your membership card and access details.</p>
              </div>
            ) : (
              <div className="p-6">
                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-lg">{selectedPlan.name} Membership</h3>
                      <p className="text-gray-600">{selectedPlan.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">${selectedPlan.price}</div>
                      <div className="text-gray-600">per {selectedPlan.period}</div>
                    </div>
                  </div>
                </div>
                
                <form onSubmit={handleMembershipSignup} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Enter your first name" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Enter your last name" 
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Enter your email" 
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Enter your phone number" 
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                    <input 
                      type="date" 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Emergency Contact</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Emergency contact name and phone" 
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Fitness Goals</label>
                    <textarea 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      rows={3}
                      placeholder="Tell us about your fitness goals and any health conditions"
                    ></textarea>
                  </div>
                  
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      required
                      className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                    />
                    <label className="ml-2 block text-sm text-gray-700">
                      I agree to the <a href="#" className="text-red-500 hover:text-red-600">Terms of Service</a> and <a href="#" className="text-red-500 hover:text-red-600">Privacy Policy</a>
                    </label>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-red-500 text-white py-3 px-6 rounded-lg hover:bg-red-600 transform hover:scale-105 transition-all duration-300 font-semibold"
                  >
                    Start My Membership - ${selectedPlan.price}/{selectedPlan.period}
                  </button>
                  
                  <p className="text-xs text-gray-500 text-center">
                    Secure payment processing. Cancel anytime with 30 days notice.
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Classes Section */}
      <section id="classes" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Calendar className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4">Epic Workouts</h2>
            <p className="text-xl text-gray-600">Find your perfect fit</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Beast Mode',
                image: 'https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                description: 'Intense strength training',
                icon: <Flame className="h-6 w-6" />
              },
              {
                title: 'Cardio Rush',
                image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                description: 'High-energy cardio sessions',
                icon: <Zap className="h-6 w-6" />
              },
              {
                title: 'Zen Zone',
                image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                description: 'Mind-body balance',
                icon: <Heart className="h-6 w-6" />
              }
            ].map((cls, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
                <div className="absolute inset-0">
                  <img src={cls.image} alt={cls.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                </div>
                <div className="relative p-8 h-[400px] flex flex-col justify-end">
                  <div className="flex items-center mb-4">
                    <div className="bg-red-500 p-2 rounded-lg">
                      {cls.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white ml-3">{cls.title}</h3>
                  </div>
                  <p className="text-gray-200 mb-6">{cls.description}</p>
                  <button 
                    onClick={() => handleJoinClass(cls.title)}
                    className="inline-flex items-center text-red-500 font-semibold hover:text-red-400 transition-colors bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/20"
                  >
                    Join Class
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Class Booking Modal */}
      {showBookingModal && selectedClass && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">{selectedClass} Classes</h2>
              <button 
                onClick={() => setShowBookingModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            {bookingSuccess ? (
              <div className="p-8 text-center">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h3>
                <p className="text-gray-600">You're all set! Check your email for class details.</p>
              </div>
            ) : (
              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Available Sessions</h3>
                    <div className="space-y-4">
                      {classSchedules[selectedClass]?.map((schedule) => (
                        <div key={schedule.id} className="border border-gray-200 rounded-lg p-4 hover:border-red-500 transition-colors">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-semibold text-gray-900">{schedule.title}</h4>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              schedule.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                              schedule.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {schedule.difficulty}
                            </span>
                          </div>
                          <p className="text-gray-600 text-sm mb-3">{schedule.description}</p>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="flex items-center text-gray-600">
                              <Clock className="h-4 w-4 mr-2" />
                              {schedule.time}
                            </div>
                            <div className="flex items-center text-gray-600">
                              <Users className="h-4 w-4 mr-2" />
                              {schedule.spots} spots left
                            </div>
                            <div className="flex items-center text-gray-600">
                              <Calendar className="h-4 w-4 mr-2" />
                              {schedule.duration}
                            </div>
                            <div className="flex items-center text-gray-600">
                              <Trophy className="h-4 w-4 mr-2" />
                              {schedule.instructor}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-4">Book Your Spot</h3>
                    <form onSubmit={handleBookClass} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Select Class</label>
                        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
                          {classSchedules[selectedClass]?.map((schedule) => (
                            <option key={schedule.id} value={schedule.id}>
                              {schedule.title} - {schedule.time}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                        <input 
                          type="text" 
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                          placeholder="Enter your full name" 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input 
                          type="email" 
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                          placeholder="Enter your email" 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                        <input 
                          type="tel" 
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                          placeholder="Enter your phone number" 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Fitness Level</label>
                        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
                          <option value="beginner">Beginner</option>
                          <option value="intermediate">Intermediate</option>
                          <option value="advanced">Advanced</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Special Requirements (Optional)</label>
                        <textarea 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                          rows={3}
                          placeholder="Any injuries, dietary restrictions, or special needs?"
                        ></textarea>
                      </div>
                      <button 
                        type="submit"
                        className="w-full bg-red-500 text-white py-3 px-6 rounded-lg hover:bg-red-600 transform hover:scale-105 transition-all duration-300 font-semibold"
                      >
                        Book Class - $25
                      </button>
                      <p className="text-xs text-gray-500 text-center">
                        By booking, you agree to our terms and conditions. Cancellation allowed up to 2 hours before class.
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Mail className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-300">We'd love to hear from you</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 transition-colors"
                      placeholder="Enter your name" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 transition-colors"
                      placeholder="Enter your email" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea 
                      className="w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 transition-colors"
                      rows={4}
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <button className="w-full bg-red-500 text-white py-3 px-6 rounded-lg hover:bg-red-600 transform hover:scale-105 transition-all duration-300">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            <div>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl h-full">
                <div className="space-y-8">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-red-500 mt-1" />
                    <div className="ml-4">
                      <h3 className="font-bold text-lg">Location</h3>
                      <p className="text-gray-300">123 Fitness Street, Gym City, GC 12345</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-red-500 mt-1" />
                    <div className="ml-4">
                      <h3 className="font-bold text-lg">Phone</h3>
                      <p className="text-gray-300">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-red-500 mt-1" />
                    <div className="ml-4">
                      <h3 className="font-bold text-lg">Email</h3>
                      <p className="text-gray-300">info@powergym.com</p>
                    </div>
                  </div>
                </div>
                <div className="mt-12">
                  <h3 className="font-bold text-lg mb-6">Follow Us</h3>
                  <div className="flex space-x-6">
                    <a href="#" className="transform hover:scale-125 transition-transform">
                      <Facebook className="h-8 w-8 text-red-500 hover:text-red-400" />
                    </a>
                    <a href="#" className="transform hover:scale-125 transition-transform">
                      <Instagram className="h-8 w-8 text-red-500 hover:text-red-400" />
                    </a>
                    <a href="#" className="transform hover:scale-125 transition-transform">
                      <Twitter className="h-8 w-8 text-red-500 hover:text-red-400" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <Dumbbell className="h-8 w-8 text-red-500" />
                <span className="ml-2 text-2xl font-bold">POWER GYM</span>
              </div>
              <p className="text-gray-400">
                Your journey to greatness starts here. No excuses, just results! 💪
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {['Home', 'About', 'Membership', 'Classes', 'Contact'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase()}`} 
                      className="text-gray-400 hover:text-red-500 transition-colors flex items-center"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6">Hours</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-red-500" />
                  24/7 Access
                </li>
                <li>Staff Hours:</li>
                <li>Mon-Fri: 6am - 10pm</li>
                <li>Sat-Sun: 8am - 8pm</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6">Newsletter</h4>
              <form className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
                <button className="w-full bg-red-500 text-white py-3 px-6 rounded-lg hover:bg-red-600 transform hover:scale-105 transition-all duration-300">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>
              &copy; 2025 Power Gym. All rights reserved. 
              <span className="mx-2">|</span> 
              <a href="#" className="hover:text-red-500 transition-colors">Privacy Policy</a>
              <span className="mx-2">|</span>
              <a href="#" className="hover:text-red-500 transition-colors">Terms of Service</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;