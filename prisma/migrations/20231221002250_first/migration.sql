-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "fristName" TEXT,
    "lastName" TEXT,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "emailVerified" TIMESTAMP(3),
    "password" TEXT NOT NULL,
    "image" TEXT,
    "address" TEXT,
    "phoneNum" INTEGER,
    "postalCode" INTEGER,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "desc" TEXT,
    "icon" TEXT,
    "imgSrc" TEXT NOT NULL,
    "imgWidth" INTEGER NOT NULL,
    "imgHeight" INTEGER NOT NULL,
    "href" TEXT NOT NULL,
    "styles" JSONB,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubCategory" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "desc" TEXT,
    "icon" TEXT,
    "slug" TEXT NOT NULL,
    "href" TEXT NOT NULL,

    CONSTRAINT "SubCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductGroup" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "desc" TEXT,
    "icon" TEXT,
    "slug" TEXT NOT NULL,
    "subSlug" TEXT NOT NULL,
    "href" TEXT NOT NULL,

    CONSTRAINT "ProductGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modified_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP(3),
    "title" TEXT NOT NULL,
    "enTitle" TEXT NOT NULL,
    "desc" TEXT,
    "img" TEXT[],
    "price" DECIMAL(65,30) NOT NULL,
    "isOffer" BOOLEAN NOT NULL DEFAULT false,
    "discount" INTEGER,
    "rate" INTEGER,
    "slug" TEXT NOT NULL,
    "subSlug" TEXT NOT NULL,
    "groupTitle" TEXT NOT NULL,
    "details" JSONB[],

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "price" DECIMAL(65,30) NOT NULL,
    "products" JSONB[],
    "status" TEXT NOT NULL,
    "intent_id" TEXT,
    "userEmail" TEXT NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BannerContent" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "buttonText" TEXT NOT NULL,
    "imgSrc" TEXT NOT NULL,
    "imgWidth" INTEGER NOT NULL,
    "imgHeight" INTEGER NOT NULL,
    "numberOfDiscountDate" INTEGER NOT NULL,
    "href" TEXT NOT NULL,

    CONSTRAINT "BannerContent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- CreateIndex
CREATE UNIQUE INDEX "Category_href_key" ON "Category"("href");

-- CreateIndex
CREATE UNIQUE INDEX "SubCategory_href_key" ON "SubCategory"("href");

-- CreateIndex
CREATE UNIQUE INDEX "ProductGroup_href_key" ON "ProductGroup"("href");

-- CreateIndex
CREATE UNIQUE INDEX "Product_enTitle_key" ON "Product"("enTitle");

-- CreateIndex
CREATE UNIQUE INDEX "Order_intent_id_key" ON "Order"("intent_id");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubCategory" ADD CONSTRAINT "SubCategory_slug_fkey" FOREIGN KEY ("slug") REFERENCES "Category"("href") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductGroup" ADD CONSTRAINT "ProductGroup_slug_fkey" FOREIGN KEY ("slug") REFERENCES "Category"("href") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductGroup" ADD CONSTRAINT "ProductGroup_subSlug_fkey" FOREIGN KEY ("subSlug") REFERENCES "SubCategory"("href") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_slug_fkey" FOREIGN KEY ("slug") REFERENCES "Category"("href") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_subSlug_fkey" FOREIGN KEY ("subSlug") REFERENCES "SubCategory"("href") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_groupTitle_fkey" FOREIGN KEY ("groupTitle") REFERENCES "ProductGroup"("href") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
