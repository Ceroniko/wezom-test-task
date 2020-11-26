import {
	PageContacts,
	PageHome,
	PageProfile,
	PageContactProfile,
	PageError,
} from "pages";

const routes = {
	home: {
		path: "/",
		page: PageHome,
		name: "Home",
		link() {
			return this.path;
		},
		exact: true,
		private: false,
	},
	profile: {
		path: "/profile",
		page: PageProfile,
		name: "Profile",
		link() {
			return this.path;
		},
		private: true,
	},
	contacts: {
		path: "/contacts",
		page: PageContacts,
		name: "Contacts",
		link() {
			return this.path;
		},
		exact: true,
		private: true,
	},
	contact: {
		path: "/contacts/:contactId",
		page: PageContactProfile,
		name: "Contact profile",
		link() {
			return this.path;
		},
		exact: true,
		private: true,
	},
	errorPage: {
		path: "*",
		page: PageError,
		name: "Error Page",
		link() {
			return this.path;
		},
		exact: true,
		private: false,
	},
};

const __ROOT_ROUTE__ = routes.home.link();

export { routes, __ROOT_ROUTE__ };
