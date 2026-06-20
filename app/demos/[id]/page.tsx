import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, ShoppingBag, Heart, CalendarCheck, Activity, MapPin, MessageSquare } from 'lucide-react';
import { demos } from '@/lib/data';
import { SectionHeader } from '@/components/ui/SectionHeader';

type Props = {
  params: Promise<{ id: string }>;
};

const fashionProducts = [
  {
    name: 'Avery Satin Dress',
    price: '$198',
    image: 'https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg',
    category: 'Dresses',
  },
  {
    name: 'Pierce Leather Jacket',
    price: '$245',
    image: 'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504',
    category: 'Outerwear',
  },
  {
    name: 'Sienna Knit Sweater',
    price: '$112',
    image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg',
    category: 'Tops',
  },
  {
    name: 'Modern Cargo Pants',
    price: '$98',
    image: 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/463957/sub/goods_463957_sub13_3x4.jpg',
    category: 'Bottoms',
  },
  {
    name: 'Canvas Tote Bag',
    price: '$56',
    image: 'https://images.unsplash.com/photo-1591561954557-26941169b49e',
    category: 'Accessories',
  },
  {
    name: 'Leather Slide Sandals',
    price: '$72',
    image: 'https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg',
    category: 'Footwear',
  },
];

const phoneProducts = [
  {
    name: ' REDMAGIC 9S Pro',
    price: '$799.00',
    image: 'https://my.redmagic.gg/cdn/shop/files/RM-DTC-PI-1080x1080_Sleet_900x.png?v=1750420428',
    category: 'Flagship',
    specs: ['6.8" OLED', '256GB storage'],
  },
  {
    name: 'iPhone 17 Pro Max',
    price: '$1,450.00',
    image: 'https://i.ebayimg.com/thumbs/images/g/oAUAAeSw5spp-4c5/s-l500.jpg',
    category: 'Premium',
    specs: ['6.9" OLED ProMotion', '256GB storage'],
  },
  {
    name: 'realme GT 7 Pro',
    price: '$899.90',
    image: 'https://m.media-amazon.com/images/I/71rFJVZsNNL._AC_SL1500_.jpg',
    category: 'Compact',
    specs: ['6.78"  LTPO AMOLED', '256GB storage'],
  },
];

const watchProducts = [
  {
    name: 'OnePlus Watch Lite',
    price: '$84.00',
    image: 'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc5/OnePlus-Watch-Lite-featured.jpg',
    feature: 'Swiss automatic movement',
  },
  {
    name: 'realme Watch S2',
    price: '$79.00',
    image: 'https://www.lowyat.net/wp-content/uploads/2024/07/realme-watch-s2-india-2-1024x597.webp',
    feature: 'Steel case with gold trim',
  },
  {
    name: 'Redmi Watch 5 Lite',
    price: '$39.00',
    image: 'https://cdn-media.sforum.vn/storage/app/media/trannghia/mo-ban-redmi-watch-5-lite-active.jpg',
    feature: 'Sapphire crystal face',
  },
];

const clinicPatients = [
  { name: 'Mia R.', status: 'Checked-in', time: '9:00 AM' },
  { name: 'Noah K.', status: 'Lab results ready', time: '10:30 AM' },
  { name: 'Sophia P.', status: 'Prescription refill', time: '1:00 PM' },
];

const clinicDoctors = [
  'Dr. Elena Grant',
  'Dr. Amir Saleh',
  'Dr. Claire Chen',
];

const constructionProjects = [
  {
    title: 'Riverfront Residences',
    image: 'https://www.oxley.com.sg/wp-content/uploads/2018/06/Riverfront_G0005882-Panorama-3.jpg',
  },
  {
    title: 'Skyline Tower',
    image: 'https://geoln.com/uploads/building_photos/fe593224f0304c0ba352211c3e71a78d.medium.webp',
  },
  {
    title: 'Modern Office Campus',
    image: 'https://as1.ftcdn.net/v2/jpg/03/39/06/72/1000_F_339067218_vOkmzJSC56JrOsrDej28FZP8eUYjlMJX.jpg',
  },
];

const factoryMetrics = [
  { label: 'Production Rate', value: '87%' },
  { label: 'Inventory Turn', value: '142K' },
  { label: 'Open Orders', value: '38' },
  { label: 'Uptime', value: '99.4%' },
];

const renderFashion = () => (
  <>
    <div className="rounded-[2rem] border border-white/10 bg-[rgba(15,23,42,0.75)] p-8 shadow-glow">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.6fr] items-center">
        <div className="space-y-6">
          <SectionHeader title="Fashion Store" description="A premium ecommerce storefront with hero product imagery, categories, and cart interactions." />
          <p className="text-sm leading-7 text-muted max-w-2xl">Launch a real retail experience with editorial product storytelling, collection filters, and purchase-ready product pages.</p>
          <div className="flex flex-wrap gap-3">
            {['New Arrivals', 'Dresses', 'Outerwear', 'Accessories', 'Footwear'].map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">{item}</span>
            ))}
          </div>
          <Link href="/demos/fashion-store" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-violet-500">
            Visit Store <ArrowRight size={16} />
          </Link>
        </div>
        <div className="relative overflow-hidden rounded-[2rem] bg-[#08172f]">
          <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80" alt="Fashion hero" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
          <div className="absolute bottom-6 left-6 rounded-3xl bg-white/10 p-4 backdrop-blur">
            <p className="text-xs uppercase tracking-[0.32em] text-accent">New season</p>
            <h2 className="mt-2 text-xl font-semibold text-white">Editorial collection</h2>
          </div>
        </div>
      </div>
    </div>

    <div className="mt-10 grid gap-6 lg:grid-cols-3">
      {fashionProducts.map((product) => (
        <div key={product.name} className="glass-card overflow-hidden rounded-[28px] border border-white/10">
          <img src={product.image} alt={product.name} className="h-56 w-full object-cover" />
          <div className="p-5">
            <p className="text-xs uppercase tracking-[0.32em] text-accent">{product.category}</p>
            <h3 className="mt-3 text-xl font-semibold text-white">{product.name}</h3>
            <p className="mt-2 text-sm text-muted">{product.price}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <button className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-accent/90">Add to cart</button>
              <button className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/80 transition hover:border-accent">View</button>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_0.45fr]">
      <div className="rounded-[32px] border border-white/10 bg-[rgba(15,23,42,0.8)] p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-accent">Product detail</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Satin Dress Collection</h2>
          </div>
          <span className="rounded-full bg-white/5 px-4 py-2 text-sm text-white/80">Best seller</span>
        </div>
        <p className="mt-6 text-sm leading-7 text-muted">A full product detail page includes photography, color swatches, size selection, and a clear Add to Cart call-to-action for a premium shopping experience.</p>
      </div>
      <div className="glass-card rounded-[32px] border border-white/10 p-6">
        <p className="text-sm uppercase tracking-[0.32em] text-accent">Cart summary</p>
        <div className="mt-6 space-y-4">
          <div className="rounded-[24px] bg-[#08172f] p-4">
            <div className="flex items-center gap-3">
              <div className="h-16 w-16 overflow-hidden rounded-3xl">
                <img src={fashionProducts[0].image} alt="Cart item" className="h-full w-full object-cover" />
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-white">{fashionProducts[0].name}</p>
                <p className="text-sm text-muted">{fashionProducts[0].price}</p>
              </div>
            </div>
          </div>
          <div className="rounded-[24px] bg-[#08172f] p-4">
            <div className="flex items-center justify-between text-sm text-white/80">
              <span>Subtotal</span>
              <span>$198</span>
            </div>
            <div className="mt-3 flex items-center justify-between text-lg font-semibold text-white">
              <span>Total</span>
              <span>$198</span>
            </div>
          </div>
          <button className="w-full rounded-[24px] bg-accent px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-accent/90">Checkout</button>
        </div>
      </div>
    </div>
  </>
);

const renderMobile = () => (
  <>
    <div className="rounded-[2rem] border border-white/10 bg-[rgba(15,23,42,0.75)] p-8 shadow-glow">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.6fr] items-center">
        <div className="space-y-6">
          <SectionHeader title="Mobile Store" description="A polished phone storefront with device catalog, pricing cards, and purchase-ready product details." />
          <p className="text-sm leading-7 text-muted max-w-2xl">Present premium devices, highlight technical specs, and surface purchase actions with crisp design and clear pricing.</p>
          <div className="flex flex-wrap gap-3">
            {['Flagship', 'Pro', 'Compact', 'Accessories'].map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">{item}</span>
            ))}
          </div>
          <Link href="/demos/mobile-store" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-violet-500">
            Browse devices <ArrowRight size={16} />
          </Link>
        </div>
        <div className="relative overflow-hidden rounded-[2rem] bg-[#08172f]">
            <img src="https://t4.ftcdn.net/jpg/08/46/26/65/240_F_846266563_Xc3HUuhJPLPN61OFf8MlNnXyb5r7d3qC.jpg" alt="Mobile hero" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
          <div className="absolute bottom-6 left-6 rounded-3xl bg-white/10 p-4 backdrop-blur">
            <p className="text-xs uppercase tracking-[0.32em] text-accent">New release</p>
            <h2 className="mt-2 text-xl font-semibold text-white">Next-gen smartphone</h2>
          </div>
        </div>
      </div>
    </div>

    <div className="mt-10 grid gap-6 md:grid-cols-3">
      {phoneProducts.map((product) => (
        <div key={product.name} className="glass-card overflow-hidden rounded-[28px] border border-white/10">
          <img src={product.image} alt={product.name} className="h-56 w-full object-cover" />
          <div className="p-5">
            <p className="text-xs uppercase tracking-[0.32em] text-accent">{product.category}</p>
            <h3 className="mt-3 text-xl font-semibold text-white">{product.name}</h3>
            <p className="mt-2 text-sm text-muted">{product.price}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {product.specs.map((spec) => (
                <span key={spec} className="rounded-full bg-white/5 px-3 py-1 text-xs text-muted">{spec}</span>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-3">
              <button className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-slate-950">Buy now</button>
              <button className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/80">Details</button>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="glass-card rounded-[32px] border border-white/10 p-6">
        <h2 className="text-2xl font-semibold text-white">Pricing plans</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {['Starter', 'Pro', 'Elite'].map((tier) => (
            <div key={tier} className="rounded-[28px] border border-white/10 bg-[#08172f] p-5 text-sm text-white/80">
              <p className="text-xs uppercase tracking-[0.32em] text-accent">{tier}</p>
              <p className="mt-4 text-3xl font-semibold text-white">{tier === 'Starter' ? '$499' : tier === 'Pro' ? '$749' : '$999'}</p>
              <p className="mt-3 leading-6">Includes device protection, express shipping, and easy returns.</p>
            </div>
          ))}
        </div>
      </div>
      <aside className="glass-card rounded-[32px] border border-white/10 p-6">
        <p className="text-sm uppercase tracking-[0.32em] text-accent">Purchase details</p>
        <div className="mt-6 space-y-4 text-sm text-muted">
          <p>Product specs, bundle savings, and streamlined checkout flows keep the shopping experience premium.</p>
          <p>Designed for mobile-first customers with clear pricing, feature cards, and rapid add-to-cart actions.</p>
        </div>
        <button className="mt-6 w-full rounded-[24px] bg-accent px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-accent/90">Start purchase</button>
      </aside>
    </div>
  </>
);

const renderWatch = () => (
  <>
    <div className="rounded-[2rem] border border-white/10 bg-[rgba(15,23,42,0.75)] p-8 shadow-glow">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.6fr] items-center">
        <div className="space-y-6">
          <SectionHeader title="Watch Store" description="A luxury ecommerce experience with collections, featured watches, and premium product details." />
          <p className="text-sm leading-7 text-muted max-w-2xl">Showcase high-end watches with rich imagery, curated product categories, and visual storytelling.</p>
          <div className="flex flex-wrap gap-3">
            {['Automatic', 'Chronograph', 'Limited', 'Heritage'].map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">{item}</span>
            ))}
          </div>
          <Link href="/demos/watch-store" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-violet-500">
            View collection <ArrowRight size={16} />
          </Link>
        </div>
        <div className="relative overflow-hidden rounded-[2rem] bg-[#08172f]">
            <img src="https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=1200&q=80" alt="Watch hero" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
          <div className="absolute bottom-6 left-6 rounded-3xl bg-white/10 p-4 backdrop-blur">
            <p className="text-xs uppercase tracking-[0.32em] text-accent">Featured timepiece</p>
            <h2 className="mt-2 text-xl font-semibold text-white">Aurum Chrono</h2>
          </div>
        </div>
      </div>
    </div>

    <div className="mt-10 grid gap-6 md:grid-cols-3">
      {watchProducts.map((watch) => (
        <div key={watch.name} className="glass-card overflow-hidden rounded-[28px] border border-white/10">
          <img src={watch.image} alt={watch.name} className="h-56 w-full object-cover" />
          <div className="p-5">
            <p className="text-xs uppercase tracking-[0.32em] text-accent">{watch.feature}</p>
            <h3 className="mt-3 text-xl font-semibold text-white">{watch.name}</h3>
            <p className="mt-2 text-sm text-muted">{watch.price}</p>
            <div className="mt-4 flex gap-3">
              <button className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-slate-950">Buy now</button>
              <button className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/80">Details</button>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-10 rounded-[32px] border border-white/10 bg-[rgba(15,23,42,0.75)] p-8">
      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold text-white">Collections built for premium brands</h2>
          <p className="mt-4 text-sm leading-7 text-muted">Luxury brand storefronts need editorial styling, sophisticated navigation, and product detail views that feel exclusive.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {['Elegant product cards', 'Curated collections', 'Rich imagery', 'Premium checkout'].map((item) => (
            <div key={item} className="rounded-[24px] border border-white/10 bg-[#08172f] p-4 text-sm text-white/80">{item}</div>
          ))}
        </div>
      </div>
    </div>
  </>
);

const renderClinic = () => (
  <>
    <div className="rounded-[2rem] border border-white/10 bg-[rgba(15,23,42,0.75)] p-8 shadow-glow">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.6fr] items-center">
        <div className="space-y-6">
          <SectionHeader title="Clinic Management" description="A real healthcare dashboard for appointments, patients, and analytics." />
          <p className="text-sm leading-7 text-muted max-w-2xl">Manage patient workflows, doctor schedules, and clinical operations with a healthcare-focused dashboard interface.</p>
          <div className="flex flex-wrap gap-3">
            {['Patients', 'Doctors', 'Appointments', 'Analytics'].map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">{item}</span>
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden rounded-[2rem] bg-[#08172f]">
          <img src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1200&q=80" alt="Clinic hero" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
          <div className="absolute bottom-6 left-6 rounded-3xl bg-white/10 p-4 backdrop-blur">
            <p className="text-xs uppercase tracking-[0.32em] text-accent">Operations center</p>
            <h2 className="mt-2 text-xl font-semibold text-white">Live clinic analytics</h2>
          </div>
        </div>
      </div>
    </div>

    <div className="mt-10 grid gap-6 xl:grid-cols-2">
      <div className="grid gap-6">
        <div className="grid gap-4 sm:grid-cols-2">
          {['1,240 Patients', '38 Appointments', '12 Doctors', '96% Satisfaction'].map((stat) => (
            <div key={stat} className="glass-card rounded-[28px] border border-white/10 p-6">
              <p className="text-sm uppercase tracking-[0.32em] text-accent">{stat.split(' ')[1]}</p>
              <p className="mt-3 text-3xl font-semibold text-white">{stat.split(' ')[0]}</p>
            </div>
          ))}
        </div>

        <div className="glass-card rounded-[32px] border border-white/10 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-accent">Appointments</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">Today’s schedule</h2>
            </div>
            <CalendarCheck className="text-accent" size={24} />
          </div>
          <div className="mt-6 space-y-4">
            {clinicPatients.map((patient) => (
              <div key={patient.name} className="rounded-[24px] bg-[#08172f] p-4 text-sm text-muted">
                <p className="font-semibold text-white">{patient.name}</p>
                <p>{patient.status} • {patient.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <aside className="space-y-6">
        <div className="glass-card rounded-[32px] border border-white/10 p-6">
          <p className="text-sm uppercase tracking-[0.32em] text-accent">Doctors on duty</p>
          <div className="mt-6 space-y-3">
            {clinicDoctors.map((name) => (
              <div key={name} className="rounded-[24px] bg-[#08172f] p-4 text-sm text-white/80">{name}</div>
            ))}
          </div>
        </div>

        <div className="glass-card rounded-[32px] border border-white/10 p-6">
          <p className="text-sm uppercase tracking-[0.32em] text-accent">Key metrics</p>
          <div className="mt-6 grid gap-4">
            {['Patient retention', 'Average wait time', 'Care satisfaction'].map((item) => (
              <div key={item} className="rounded-[24px] bg-[#08172f] p-4 text-sm text-muted">{item}</div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  </>
);

const renderConstruction = () => (
  <>
    <div className="rounded-[2rem] border border-white/10 bg-[rgba(15,23,42,0.75)] p-8 shadow-glow">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.6fr] items-center">
        <div className="space-y-6">
          <SectionHeader title="Construction Company" description="A premium corporate site for architecture, engineering, and construction portfolios." />
          <p className="text-sm leading-7 text-muted max-w-2xl">Present services, project work, and client trust with an executive-level website experience.</p>
          <div className="flex flex-wrap gap-3">
            {['Architecture', 'Engineering', 'Commercial', 'Renovation'].map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">{item}</span>
            ))}
          </div>
          <Link href="/demos/construction-website" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-violet-500">
            View portfolio <ArrowRight size={16} />
          </Link>
        </div>
        <div className="relative overflow-hidden rounded-[2rem] bg-[#08172f]">
          <img src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80" alt="Construction hero" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
          <div className="absolute bottom-6 left-6 rounded-3xl bg-white/10 p-4 backdrop-blur">
            <p className="text-xs uppercase tracking-[0.32em] text-accent">Featured project</p>
            <h2 className="mt-2 text-xl font-semibold text-white">Skyline tower build</h2>
          </div>
        </div>
      </div>
    </div>

    <div className="mt-10 grid gap-6 md:grid-cols-3">
      {constructionProjects.map((project) => (
        <div key={project.title} className="glass-card overflow-hidden rounded-[28px] border border-white/10">
          <img src={project.image} alt={project.title} className="h-56 w-full object-cover" />
          <div className="p-5">
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            <p className="mt-3 text-sm text-muted">Commercial and residential design with modern structural planning.</p>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-10 rounded-[32px] border border-white/10 bg-[rgba(15,23,42,0.75)] p-8">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_0.9fr]">
        <div className="space-y-5">
          <SectionHeader title="Trusted by clients" description="Testimonials and contact-driven storytelling for a construction brand." />
          <div className="space-y-4 text-sm leading-7 text-muted">
            <p>“A responsive portfolio that clearly communicates service expertise and project delivery.”</p>
            <p>“The project showcase makes large-scale builds feel premium and easy to explore.”</p>
          </div>
        </div>
        <div className="rounded-[28px] border border-white/10 bg-[#08172f] p-6">
          <p className="text-sm uppercase tracking-[0.32em] text-accent">Contact</p>
          <div className="mt-4 space-y-3 text-sm text-muted">
            <p>Reach out for proposals, site planning, and commercial development.</p>
            <p><strong className="text-white">Email:</strong> hello@buildstudio.com</p>
            <p><strong className="text-white">Phone:</strong> +1 (555) 682-4789</p>
          </div>
          <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-accent/90">
            Request quote <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  </>
);

const renderFactory = () => (
  <>
    <div className="rounded-[2rem] border border-white/10 bg-[rgba(15,23,42,0.75)] p-8 shadow-glow">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.6fr] items-center">
        <div className="space-y-6">
          <SectionHeader title="Factory Dashboard" description="A manufacturing ERP dashboard with production metrics, inventory, and orders." />
          <p className="text-sm leading-7 text-muted max-w-2xl">Monitor production performance and inventory flows with an industrial-grade analytics interface.</p>
          <div className="flex flex-wrap gap-3">
            {['Production', 'Inventory', 'Orders', 'Analytics'].map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">{item}</span>
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden rounded-[2rem] bg-[#08172f]">
          <img src="https://thumbs.dreamstime.com/b/smart-industry-dashboard-automation-industrial-data-latch-smart-industry-dashboard-combining-automation-robotics-cloud-448241497.jpg?w=992" alt="Factory hero" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
          <div className="absolute bottom-6 left-6 rounded-3xl bg-white/10 p-4 backdrop-blur">
            <p className="text-xs uppercase tracking-[0.32em] text-accent">Live operations</p>
            <h2 className="mt-2 text-xl font-semibold text-white">Manufacturing insights</h2>
          </div>
        </div>
      </div>
    </div>

    <div className="mt-10 grid gap-6 xl:grid-cols-2">
      <div className="grid gap-6">
        <div className="grid gap-4 sm:grid-cols-2">
          {factoryMetrics.map((metric) => (
            <div key={metric.label} className="glass-card rounded-[28px] border border-white/10 p-6">
              <p className="text-sm uppercase tracking-[0.32em] text-accent">{metric.label}</p>
              <p className="mt-3 text-3xl font-semibold text-white">{metric.value}</p>
            </div>
          ))}
        </div>
        <div className="glass-card rounded-[32px] border border-white/10 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-accent">Production output</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">Daily throughput</h2>
            </div>
            <Activity className="text-accent" size={24} />
          </div>
          <div className="mt-6 space-y-3">
            {['Assembly line A - 83%', 'Line B - 91%', 'Quality checks - 99%'].map((item) => (
              <div key={item} className="rounded-[24px] bg-[#08172f] p-4 text-sm text-muted">{item}</div>
            ))}
          </div>
        </div>
      </div>

      <aside className="space-y-6">
        <div className="glass-card rounded-[32px] border border-white/10 p-6">
          <p className="text-sm uppercase tracking-[0.32em] text-accent">Inventory status</p>
          <div className="mt-6 space-y-4 text-sm text-muted">
            {['Raw materials - 21,340 units', 'Finished goods - 4,820 units', 'Critical stock - 380 units'].map((item) => (
              <div key={item} className="rounded-[24px] bg-[#08172f] p-4">{item}</div>
            ))}
          </div>
        </div>
        <div className="glass-card rounded-[32px] border border-white/10 p-6">
          <p className="text-sm uppercase tracking-[0.32em] text-accent">Order pipeline</p>
          <div className="mt-6 space-y-4 text-sm text-muted">
            {['Order #5243 - assembly', 'Order #5244 - shipping', 'Order #5247 - quality check'].map((item) => (
              <div key={item} className="rounded-[24px] bg-[#08172f] p-4">{item}</div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  </>
);

export default async function DemoDetailPage({ params }: Props) {
  const { id } = await params;
  const demo = demos.find((item) => item.id === id);

  if (!demo) {
    notFound();
  }

  const renderContent = () => {
    switch (demo.id) {
      case 'fashion-store':
        return renderFashion();
      case 'mobile-store':
        return renderMobile();
      case 'watch-store':
        return renderWatch();
      case 'clinic-system':
        return renderClinic();
      case 'construction-website':
        return renderConstruction();
      case 'admin-dashboard':
        return renderFactory();
      default:
        return null;
    }
  };

  return (
    <div className="relative py-16">
      <div className="absolute inset-x-0 top-0 h-72 bg-radial-glow opacity-40" />
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mb-10 flex flex-col gap-4 rounded-[2rem] border border-white/10 bg-[rgba(15,23,42,0.75)] p-8 shadow-glow sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-accent">Demo Showcase</p>
            <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">{demo.title}</h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted">{demo.highlight}</p>
          </div>
          <Link href="/demos" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
            Back to Demos <ArrowRight size={16} />
          </Link>
        </div>
        {renderContent()}
      </div>
    </div>
  );
}
