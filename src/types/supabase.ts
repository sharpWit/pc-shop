export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      BannerContent: {
        Row: {
          buttonText: string
          createdAt: string
          description: string
          href: string
          id: string
          imgHeight: string
          imgSrc: string
          imgWidth: string
          numberOfDiscountDate: number
          title: string
        }
        Insert: {
          buttonText: string
          createdAt?: string
          description: string
          href: string
          id: string
          imgHeight: string
          imgSrc: string
          imgWidth: string
          numberOfDiscountDate: number
          title: string
        }
        Update: {
          buttonText?: string
          createdAt?: string
          description?: string
          href?: string
          id?: string
          imgHeight?: string
          imgSrc?: string
          imgWidth?: string
          numberOfDiscountDate?: number
          title?: string
        }
        Relationships: []
      }
      Category: {
        Row: {
          createdAt: string
          desc: string | null
          href: string
          icon: string | null
          id: string
          imgHeight: string
          imgSrc: string
          imgWidth: string
          name: string
          styles: Json | null
          title: string
        }
        Insert: {
          createdAt?: string
          desc?: string | null
          href: string
          icon?: string | null
          id: string
          imgHeight: string
          imgSrc: string
          imgWidth: string
          name: string
          styles?: Json | null
          title: string
        }
        Update: {
          createdAt?: string
          desc?: string | null
          href?: string
          icon?: string | null
          id?: string
          imgHeight?: string
          imgSrc?: string
          imgWidth?: string
          name?: string
          styles?: Json | null
          title?: string
        }
        Relationships: []
      }
      Product: {
        Row: {
          createdAt: string
          deleted_at: string | null
          desc: string | null
          details: Json[] | null
          discount: number | null
          enTitle: string
          groupTitle: string
          id: string
          img: string[] | null
          isOffer: boolean
          modified_at: string | null
          price: number
          rate: number | null
          slug: string
          subSlug: string
          title: string
        }
        Insert: {
          createdAt?: string
          deleted_at?: string | null
          desc?: string | null
          details?: Json[] | null
          discount?: number | null
          enTitle: string
          groupTitle: string
          id: string
          img?: string[] | null
          isOffer?: boolean
          modified_at?: string | null
          price: number
          rate?: number | null
          slug: string
          subSlug: string
          title: string
        }
        Update: {
          createdAt?: string
          deleted_at?: string | null
          desc?: string | null
          details?: Json[] | null
          discount?: number | null
          enTitle?: string
          groupTitle?: string
          id?: string
          img?: string[] | null
          isOffer?: boolean
          modified_at?: string | null
          price?: number
          rate?: number | null
          slug?: string
          subSlug?: string
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "Product_groupTitle_fkey"
            columns: ["groupTitle"]
            isOneToOne: false
            referencedRelation: "ProductGroup"
            referencedColumns: ["href"]
          },
          {
            foreignKeyName: "Product_slug_fkey"
            columns: ["slug"]
            isOneToOne: false
            referencedRelation: "Category"
            referencedColumns: ["href"]
          },
          {
            foreignKeyName: "Product_subSlug_fkey"
            columns: ["subSlug"]
            isOneToOne: false
            referencedRelation: "SubCategory"
            referencedColumns: ["href"]
          }
        ]
      }
      ProductGroup: {
        Row: {
          createdAt: string
          desc: string | null
          href: string
          icon: string | null
          id: string
          name: string
          slug: string
          subSlug: string
          title: string
        }
        Insert: {
          createdAt?: string
          desc?: string | null
          href: string
          icon?: string | null
          id: string
          name: string
          slug: string
          subSlug: string
          title: string
        }
        Update: {
          createdAt?: string
          desc?: string | null
          href?: string
          icon?: string | null
          id?: string
          name?: string
          slug?: string
          subSlug?: string
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "ProductGroup_slug_fkey"
            columns: ["slug"]
            isOneToOne: false
            referencedRelation: "Category"
            referencedColumns: ["href"]
          },
          {
            foreignKeyName: "ProductGroup_subSlug_fkey"
            columns: ["subSlug"]
            isOneToOne: false
            referencedRelation: "SubCategory"
            referencedColumns: ["href"]
          }
        ]
      }
      SubCategory: {
        Row: {
          createdAt: string
          desc: string | null
          href: string
          icon: string | null
          id: string
          name: string
          slug: string
          title: string
        }
        Insert: {
          createdAt?: string
          desc?: string | null
          href: string
          icon?: string | null
          id: string
          name: string
          slug: string
          title: string
        }
        Update: {
          createdAt?: string
          desc?: string | null
          href?: string
          icon?: string | null
          id?: string
          name?: string
          slug?: string
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "SubCategory_slug_fkey"
            columns: ["slug"]
            isOneToOne: false
            referencedRelation: "Category"
            referencedColumns: ["href"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
